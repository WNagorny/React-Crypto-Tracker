import React from 'react'
import paginationArrow from '../assets/pagination-arrow.svg'

const Pagination = () => {
	return (
		<div className='flex items-center'>
			<ul className='flex items-center justify-end text-sm'>
				<li className='flex items-center'>
					<button className='outline-0 hover:text-amber-500 w-8'>
						<img
							src={paginationArrow}
							alt='paginationArrow left'
							className='w-full h-auto rotate-180'
						/>
					</button>
				</li>
				<li><button className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center text-lg'>...</button></li>
				<li><button className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center bg-gray-200 mx-1.5'>1</button></li>
				<li><button className='outline-0 rounded-full w-8 h-8 items-center justify-center bg-amber-500 text-gray-300 mx-1.5'>2</button></li>
				<li><button className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center bg-gray-200 mx-1.5'>3</button></li>
            <li><button className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center text-lg'>...</button></li>
				<li><button className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center bg-gray-200 mx-1.5'>100</button></li>
				<li>
            <button className='outline-0 hover:text-amber-500 w-8'>
						<img
							src={paginationArrow}
							alt='paginationArrow right'
							className='w-full h-auto'
						/>
					</button>
				</li>
			</ul>
		</div>
	)
}

export default Pagination
