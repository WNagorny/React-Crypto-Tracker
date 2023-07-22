import React , {useContext, useRef}from 'react'
import { CryptoContext } from '../context/CryptoContext'

import submitIcon from '../assets/submit-icon.svg'

const Currency = () => {
   let {setCurrency} = useContext(CryptoContext)

   const currencyRef = useRef(null)

   const handleCurrencySubmit = (e) => {
      e.preventDefault();
      let val = currencyRef.current.value
      setCurrency(val)
      currencyRef.current.value = '';
   }


	return (
			<form className='relative flex items-center font-nunito md:mr-12 mr-1' onSubmit={handleCurrencySubmit}>
				<label
                  htmlFor='currency'
                  className='relative flex justify-center items-center mr-2  sm:text-base text-sm sm:font-bold font-medium'
               > Currency 
            </label>

				<input
					type='text'
					name='currency'
					placeholder='usd'
					className='w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-amber-500 leading-4 sm:text-base text-sm sm:p-0 sm:pl-2 p-1'
               ref={currencyRef}
				/>
				<button type='submit' className='ml-2 cursor-pointer'>
               <img src={submitIcon} alt="submit" className='w-full h-auto'/>
            </button>
			</form>
		
	)
}

export default Currency
