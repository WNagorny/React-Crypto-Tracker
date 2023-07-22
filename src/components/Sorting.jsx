import React, { useContext } from 'react'
import selectIcon from '../assets/select-icon.svg'
import { CryptoContext } from '../context/CryptoContext'



const Sorting = () => {

   let {setSortBy} = useContext(CryptoContext)

   const handleSort = (e) => {
      e.preventDefault();
      let val = e.target.value
      setSortBy(val)
   }

  return (
    <label className='relative flex lg:justify-center justify-start items-center mt-4 sm:mt-0'>
      <span className='mr-2 sm:font-bold font-medium sm:text-base text-sm w-16 capitalize'>sort by:</span>
      <select name="sortby" className='rounded bg-gray-200 sm:text-base text-sm pl-2 pr-10 py-1.5 focus:outline-0  appearance-none capitalize leading-4
            w-full sm:w-48' onClick={handleSort}>
         <option className='sm:text-base text-sm' value="market_cap_desc">market cap desc</option>
         <option className='sm:text-base text-sm' value="market_cap_asc">market cap asc</option>
         <option className='sm:text-base text-sm' value="volume_desc">volume desc</option>
         <option className='sm:text-base text-sm' value="volume_asc">volume asc</option>
         <option className='sm:text-base text-sm' value="id_desc">id desc</option>
         <option className='sm:text-base text-sm' value="id_asc">id asc</option>
         <option className='sm:text-base text-sm' value="gecko_desc">gecko desc</option>
         <option className='sm:text-base text-sm' value="gecko_asc">gecko asc</option>
      </select>
      <img src={selectIcon} alt="submit" className='w-[1rem] h-auto absolute right-0.5 top-1  pointer-events-none bg-red'/>

    </label>
  )
}

export default Sorting