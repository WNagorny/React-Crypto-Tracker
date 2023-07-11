import React from 'react'
import { useLayoutEffect, useState } from 'react'

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

const ChartComponent = ({ data }) => {
	return (
		<ResponsiveContainer height="90%">
			<LineChart width={400} height={400} data={data}>
				<Line
					type='monotone'
					dataKey='prices'
					stroke='#FFC107'
					strokeWidth={'2px'}
				/>
				<CartesianGrid stroke='#ccc' />
				<XAxis dataKey='date' />
				<YAxis />
				<Tooltip />
				<Legend />
			</LineChart>
		</ResponsiveContainer>
	)
}

const Chart = ({ id }) => {
	const [chartData, setChartData] = useState()

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
			<ChartComponent data={chartData} />
		</div>
	)
}

export default Chart
