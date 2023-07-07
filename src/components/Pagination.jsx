import React, { useContext,useRef } from 'react'
import paginationArrow from '../assets/pagination-arrow.svg'
import { CryptoContext } from '../context/CryptoContext'
import submitIcon from '../assets/submit-icon.svg'

const PerPage = () => {

	let {setPerPage} = useContext(CryptoContext)

	const inputRef = useRef(null);

	const handleSubmitPerPage = (e) => {
		e.preventDefault();
		let val = inputRef.current.value;
		
		if(val !== 0){
			setPerPage(val)
			inputRef.current.value = val
		}
	}


	return (
		<form
			className='relative flex items-center font-nunito mr-12'
			onSubmit={handleSubmitPerPage}
		>
			<label
				htmlFor='perpage'
				className='relative flex justify-center items-center mr-2 font-bold'
			>
				{' '}
				per Page
			</label>

			<input
				type='number'
				min={1}
				max={30}
				name='perpage'
				placeholder='10'
				className='w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-amber-500 leading-4'
				ref={inputRef}
			/>
			<button type='submit' className='ml-2 cursor-pointer'>
				<img src={submitIcon} alt='submit' className='w-full h-auto' />
			</button>
		</form>
	)
}

const Pagination = () => {
	// const [page, setPage] = useState(1)
	let { page, setPage, totalPages,perpage } = useContext(CryptoContext)

	const TotalNumber = Math.ceil(totalPages / perpage)

	const next = () => {
		if (page === TotalNumber) {
			return null
		} else {
			setPage(page + 1)
		}
	}

	const previous = () => {
		if (page === 1) {
			return null
		} else {
			setPage(page - 1)
		}
	}

	const multiStepNext = () => {
		if (page + 3 >= TotalNumber) {
			setPage(TotalNumber - 1)
		} else {
			setPage(page + 3)
		}
	}

	const multiStepPrev = () => {
		if (page - 3 < 1) {
			setPage(TotalNumber + 1)
		} else {
			setPage(page - 3)
		}
	}

	return (
		<div className='flex items-center'>

			<PerPage/>

			<ul className='flex items-center justify-end text-sm'>
				<li className='flex items-center'>
					<button
						className='outline-0 hover:text-amber-500 w-8'
						onClick={previous}
					>
						<img
							src={paginationArrow}
							alt='paginationArrow left'
							className='w-full h-auto rotate-180'
						/>
					</button>
				</li>

				{page > 3 ? (
					<li>
						<button
							onClick={multiStepPrev}
							className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center text-lg'
						>
							...
						</button>
					</li>
				) : null}

				{page - 1 !== 0 ? (
					<li>
						<button
							onClick={previous}
							className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center bg-gray-200 mx-1.5'
						>
							{page - 1}
						</button>
					</li>
				) : null}

				<li>
					<button
						disabled
						className='outline-0 rounded-full w-8 h-8 items-center justify-center bg-amber-500 text-gray-300 mx-1.5'
					>
						{page}
					</button>
				</li>

				{page + 1 !== TotalNumber && page !== TotalNumber ? (
					<li>
						<button
							onClick={next}
							className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center bg-gray-200 mx-1.5'
						>
							{page + 1}
						</button>
					</li>
				) : null}

				{page + 1 !== TotalNumber && page !== TotalNumber ? (
					<li>
						<button
							onClick={multiStepNext}
							className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center text-lg'
						>
							...
						</button>
					</li>
				) : null}

				{page !== TotalNumber ? (
					<li>
						<button
							onClick={() => setPage(TotalNumber)}
							className='outline-0 hover:text-amber-500 rounded-full w-8 h-8 items-center justify-center bg-gray-200 mx-1.5'
						>
							{TotalNumber}
						</button>
					</li>
				) : null}

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
