import React from 'react'
import { useLayoutEffect, useState, useContext } from 'react'

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
} from 'recharts'
import { CryptoContext } from '../context/CryptoContext';

function CustomTooltip({ payload, label, active, currency="usd" }) {
   if (active) {
     return (
       <div className="custom-tooltip">
         <p className="label text-sm ">{`${label} : ${
            new Intl.NumberFormat('en-IN', {
               style: 'currency',
               currency: currency,
               minimumFractionDigits:3,
            }).format(payload[0].value)
         }`}</p>
       </div>
     );
   }
 
   return null;
 }

const ChartComponent = ({ data, currency }) => {
	return (
		<ResponsiveContainer height="90%">
			<LineChart width={400} height={400} data={data}>
				<Line
					type='monotone'
					dataKey='prices'
					stroke='#FFC107'
					strokeWidth={'2px'}
				/>
				<CartesianGrid stroke='#323232' />
				<XAxis dataKey='date' hide />
				<YAxis dataKey="prices" hide domain={["auto","auto"]} />
				<Tooltip content={<CustomTooltip/>} currency={currency} cursor={false} wrapperStyle={{outline : "none"}}/>
				<Legend />
			</LineChart>
		</ResponsiveContainer>
	)
}

const Chart = ({ id }) => {

	const [chartData, setChartData] = useState()
   let {currency} = useContext(CryptoContext)

	useLayoutEffect(() => {
		const getChartData = async id => {
			try {
				const data = await fetch(
					`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`
				)
					.then(res => res.json())
					.then(json => json)

				console.log('ChartDatLog', data)

				let convertedData = data.prices.map(item => {
					return {
						date: new Date(item[0]).toLocaleDateString(),
						prices: item[1],
					}
				})

				console.log('convertedData', convertedData)
				setChartData(convertedData)
			} catch (error) {
				console.log(error)
			}
		}

		getChartData(id)
	}, [id])

	return (
		<div className='w-full h-[60%]'>
			<ChartComponent data={chartData} currency={currency} />
		</div>
	)
}

export default Chart
