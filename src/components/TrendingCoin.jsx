import React from 'react'
import {useNavigate} from 'react-router-dom'



const TrendingCoin = ({data}) => {

   let navigate = useNavigate();
   const getCoinDetails = (id) => {
      navigate(id)
   }


  return (
    <div className='w-[40%] bg-gray-200 mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-gray-100 hover:bg-opacity-40' onClick={ () => getCoinDetails(data.id)}>
      {data ?

        <>
        
         <h3 className='text-base flex items-center my-0.5'>
               <span className='text-gray-100 capitalize mr-2'>name:</span>
               <span className='text-amber mr-1'>{data.name}</span>
               {/* <img src={data.small} alt={data.name} className='w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full'/> */}
            </h3>

         <h3 className='text-base flex items-center my-0.5'>
               <span className='text-gray-100 capitalize mr-2'>market cap rank:</span>
               <span className='text-amber'>{data.market_cap_rank}</span>
         </h3>

         <h3 className='text-base flex items-center my-0.5'>
               <span className='text-gray-100 capitalize mr-2'>price:</span>
               <span className='text-amber'>{new Intl.NumberFormat('en-IN', {
												style: 'currency',
												currency: 'btc',
                                    maximumSignificantDigits:5,
											}).format(data.price_btc)}</span>
         </h3>

         <h3 className='text-base flex items-center my-0.5'>
               <span className='text-gray-100 capitalize mr-2'>score</span>
               <span className='text-amber'>{data.score}</span>
         </h3>

         <img src={data.large} alt={data.name} className='w-[17%] h-[auto] rounded-full absolute top-4 right-12 -translate-y-2/4'/>
        
        </>

      : null
   }
      </div>
  )
}

export default TrendingCoin