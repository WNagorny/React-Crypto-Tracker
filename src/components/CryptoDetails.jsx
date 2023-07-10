import React from 'react'
import ReactDOM from 'react-dom'
import { useParams,useNavigate} from 'react-router-dom';
import {useLayoutEffect,useContext,} from 'react'
import { CryptoContext } from '../context/CryptoContext';

const CryptoDetails = () => {
	let { coinId } = useParams()
   let {getCoinData,coinData} = useContext(CryptoContext)

   let navigate = useNavigate()

   
   useLayoutEffect(() => {
     
   getCoinData(coinId)
    
   }, [coinId])

   const close = () => {
      navigate("..")
   }

	return ReactDOM.createPortal(
		<div className='fixed top-0 w-full h-full bg-gray-200 bg-opacity-30 first-letter: backdrop-blur-sm flex items-center justify-center font-nunito' onClick={close}>
			<div className='w-[65%] h-[75%] bg-gray-300 bg-opacity-75 rounded-lg text-white relative'>
				{
               coinData ? <h1>{coinData.id}</h1> : null
            }
			</div>
		</div>,
		document.getElementById('model')
	)
}

export default CryptoDetails
