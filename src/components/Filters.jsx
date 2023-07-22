import React from 'react'
import Search from './Search'
import Currency from './Currency'
import Sorting from './Sorting'
import Reset from './Reset'

const Filters = () => {
	return (
		<div className='w-full lg:h-12 h-full lg:border-2 rounded-lg border-solid lg:border-gray-100 border-0 flex lg:flex-row flex-col lg:items-center lg:justify-between relative align-start justify-between'>
			<Search />

			<div className='flex lg:mr-7 justify-between mt-4 lg:mt-0 sm:flex-row flex-col relative'>
				<Currency />
				<Sorting />
				<Reset />
			</div>
		</div>
	)
}
export default Filters
