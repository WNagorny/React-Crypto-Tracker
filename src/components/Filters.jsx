import React from 'react'
import Search from './Search'
import Currency from './Currency'
import Sorting from './Sorting'


const Filters = () => {

  return (
    <div className='w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-around relative'>
      <Search/>
      <Currency/>
      <Sorting/>
    </div>
  )
}

export default Filters