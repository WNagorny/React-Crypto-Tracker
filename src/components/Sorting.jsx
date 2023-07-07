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
    <label className='relative flex justify-center items-center'>
      <span className='font-bold mr-2 capitalize'>sort by:</span>
      <select name="sortby" className='rounded bg-gray-200 text-sm pl-2 pr-10 py-0.5 leading-10 capitalize focus:outline-0' onClick={handleSort}>
         <option value="market_cap_desc">market cap desc</option>
         <option value="market_cap_asc">market cap asc</option>
         <option value="volume_desc">volume desc</option>
         <option value="volume_asc">volume asc</option>
         <option value="id_desc">id desc</option>
         <option value="id_asc">id asc</option>
         <option value="gecko_desc">gecko desc</option>
         <option value="gecko_asc">gecko asc</option>
      </select>
      <img src={selectIcon} alt="submit" className='w-[1rem] h-auto absolute right-0.5 top-1  pointer-events-none'/>

    </label>
  )
}

export default Sorting