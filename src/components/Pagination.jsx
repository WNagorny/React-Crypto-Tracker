import React, {useState} from 'react'
import paginationArrow from '../assets/pagination-arrow.svg'

const Pagination = () => {

const [currentPage, setCurrentPage] = useState(1)

const TotalNumber = 250

const next = () => {
   if(currentPage === TotalNumber){
      return null;
   } else{
      setCurrentPage(currentPage + 1)
   }
}


const previous = () => {
   if(currentPage === 1){
      return null;
   } else{
      setCurrentPage(currentPage - 1)
   }
}

const multiStepNext = () => {
   if(currentPage +3 >= TotalNumber) {
      setCurrentPage(TotalNumber - 1)
   } else {
      setCurrentPage(currentPage + 3)
   }
}

const multiStepPrev = () => {
   if(currentPage - 3 < 1) {
      setCurrentPage(TotalNumber + 1)
   } else {
      setCurrentPage(currentPage - 3)
   }
}

	return (
		<div className='flex items-center'>
			<ul className='flex items-center justify-end text-sm'>
				<li className='flex items-center'>
					<button className='outline-0 hover:text-amber-500 w-8' onClick={previous}>
						<img
							src={paginationArrow}
							alt='paginationArrow left'
							className='w-full h-auto rotate-180'
						/>
					</button>
				</li>

				{
					(currentPage >3) ? <li><button onClick={multiStepPrev} className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center text-lg'>...</button></li>
				 : null
				}
				
				{
					(currentPage -1 !== 0) ? <li><button onClick={previous} className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center bg-gray-200 mx-1.5'>{currentPage -1}</button></li> : null
				}
				

				<li><button disabled className='outline-0 rounded-full w-8 h-8 items-center justify-center bg-amber-500 text-gray-300 mx-1.5'>{currentPage}</button></li>
				
				{
					(currentPage +1 !==TotalNumber && currentPage !== TotalNumber) ? <li><button onClick={next} className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center bg-gray-200 mx-1.5'>{currentPage + 1}</button></li> : null
				}

				
				{
					currentPage +1 !==TotalNumber && currentPage !== TotalNumber ? <li><button onClick={multiStepNext} className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center text-lg'>...</button></li> : null
				}
				

				{
				currentPage!== TotalNumber ? <li><button onClick={() => setCurrentPage(TotalNumber)} className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center bg-gray-200 mx-1.5'>{TotalNumber}</button></li> : null
				}
				
				
				<li>
            <button className='outline-0 hover:text-amber-500 w-8' onClick={next}>
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
