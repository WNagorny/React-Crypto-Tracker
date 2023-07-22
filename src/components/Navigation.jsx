import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav
			className='lg:w-[40%] sm:w-[80%] w-[90%] flex justify-around align-middle lg:mt-16 sm:mt-24 mt-20 border border-solid border-amber sm:rounded-lg rounded-md'
		>
			<NavLink
				to='/'
				end
				className={({ isActive }) => {
					return `w-full md:text-base text-sm text-center  font-nunito sm:m-2.5 m-1.5
               ${
									isActive
										? 'bg-amber text-gray-300'
										: 'bg-gray-200 text-gray-100 hover:text-amber-500 active:bg-amber-500 active:text-gray-300'
								}
                 border-0 cursor-pointer rounded capitalize font-semibold`
				}}
			>
				crypto
			</NavLink>
			<NavLink
				to='/trending'
				className={({ isActive }) => {
					return `w-full md:text-base text-sm  text-center  font-nunito sm:m-2.5 m-1.5
               ${
									isActive
										? 'bg-amber text-gray-300'
										: 'bg-gray-200 text-gray-100 hover:text-amber-500 active:bg-amber-500 active:text-gray-300'
								}
                 border-0 cursor-pointer rounded capitalize font-semibold`
				}}
			>
				trending
			</NavLink>
			<NavLink
				to='/saved'
				className={({ isActive }) => {
					return `w-full md:text-base text-sm  text-center  font-nunito sm:m-2.5 m-1.5
               ${
									isActive
										? 'bg-amber text-gray-300'
										: 'bg-gray-200 text-gray-100 hover:text-amber-500 active:bg-amber-500 active:text-gray-300'
								}
                 border-0 cursor-pointer rounded capitalize font-semibold`
				}}
			>
				saved
			</NavLink>
		</nav>
	)
}

export default Navigation
