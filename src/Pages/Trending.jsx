import React, { useContext } from 'react'
import { TrendingContext } from '../context/TrendingContext'
import TrendingCoin from '../components/TrendingCoin'
import {Outlet} from 'react-router-dom'
import Reset from '../components/Reset'

const Trending = () => {

	const {trendData, resetTrendingResult} = useContext(TrendingContext)


	return (
		<section className='lg:w-[80%] w-[90%] h-full flex flex-col mt-16 mb-24 relative'>
			<div className='w-full flex lg:flex-row flex-col items-center flex-wrap justify-evenly  py-8 border border-gray-100 min-h-[60vh] rounded'>
				
			{
				trendData && trendData.map(coin =>
					<TrendingCoin  data={coin.item}/>   )
			}
			</div>

			<Outlet/>
			
		</section>
	)
}

export default Trending
