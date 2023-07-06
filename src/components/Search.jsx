import React, { useState, useContext } from 'react'
import searchIcon from '../assets/search-icon.svg'
import { CryptoContext } from '../context/CryptoContext'
import debounce from 'lodash.debounce'

const SearchInput = ({ handleSearch }) => {
	const [searchText, setSearchText] = useState('')
	let { searchData, setCoinSearch,setSearchData } = useContext(CryptoContext)

	let handelInput = e => {
		e.preventDefault()

		let query = e.target.value
		setSearchText(query)
		handleSearch(query)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		handleSearch(searchText)
	}

	const selectCoin = coin => {
		setCoinSearch(coin)
		setSearchText('')
		setSearchData()
	}

	return (
		<>
			<form className='w-96 relative flex items-center mr-44 font-nunito' onSubmit={handleSubmit}>
				<input
					onChange={handelInput}
					value={searchText}
					type='text'
					name='search'
					placeholder='search here...'
					className='w-full rounded bg-gray-200 placeholder:text-gray-100 pl-3 py-0.5 capitalize required outline-0 border border-transparent focus:border-amber-500'
				/>
				<button type='submit' className='absolute right-2 cursor-pointer'>
					<img src={searchIcon} alt='searchIcon' className='w-full h-auto' />
				</button>
			</form>

			{searchText.length > 0 ? (
				<ul className='absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md'>
					{searchData ? (
						searchData.map(coin => {
							return (
								<li
									className='flex items-center ml-4 my-3 cursor-pointer'
									key={coin.id}
									onClick={() => selectCoin(coin.id)}
								>
									<img
										src={coin.thumb} alt={coin.name} className='w-[1rem] h-[1rem] mx-2' />
										<span>{coin.name}</span>
								</li>
							)
						})
					) : (
						<div className='w-full h-full flex justify-center items-center'>
							<div className="w-8 h-8 border-4 border-amber-500 rounded-full border-b-gray-200 animate-spin" role="status"/>
							<span className='ml-4'>Searching...</span>
						</div>
					)}
				</ul>
			) : null}
		</>
	)
}

const Search = () => {
	let { getSearchResult } = useContext(CryptoContext)

	const debounceFunc = debounce(function (val) {
		getSearchResult(val)
	}, 2000)

	return (
		<div className='relative'>
			<SearchInput handleSearch={debounceFunc} />
		</div>
	)
}

export default Search