import React from 'react'
import submitIcon from '../assets/submit-icon.svg'

const Currency = () => {
	return (
		<div className='flex mr-7'>
			<form className='relative flex items-center font-nunito mr-12'>
				<label
                  htmlFor='currency'
                  className='relative flex justify-center items-center mr-2 font-bold'
               > Currency 
            </label>

				<input
					type='text'
					name='currency'
					placeholder='usd'
					className='w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-amber-500 leading-4'
				/>
				<button type='submit' className='ml-2 cursor-pointer'>
               <img src={submitIcon} alt="submit" className='w-full h-auto'/>
            </button>
			</form>
		</div>
	)
}

export default Currency
