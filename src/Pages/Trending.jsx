import React, { useContext } from 'react'
import { TrendingContext } from '../context/TrendingContext'
import TrendingCoin from '../components/TrendingCoin'
import {Outlet} from 'react-router-dom'
import Reset from '../components/Reset'

const Trending = () => {

	const {trendData, resetTrendingResult} = useContext(TrendingContext)


	return (
		<section className='w-[80%] h-full flex flex-col mt-16 mb-24 relative'>
			<div className='w-full min-h-[60vh] py-8 flex flex-wrap justify-evenly border border-gray-100 rounded'>
				
			{
				trendData && trendData.map(coin =>
					<TrendingCoin  data={coin.item}/>   )
			}
				<Reset/>
			</div>

			<Outlet/>
			
		</section>
	)
}

export default Trending
