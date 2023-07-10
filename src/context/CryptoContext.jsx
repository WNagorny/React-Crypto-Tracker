import { useLayoutEffect, createContext, useState } from 'react'

//create context object
export const CryptoContext = createContext({})

//create the provider component
export const CryptoProvider = ({ children }) => {
	const [cryptoData, setCryptoData] = useState()
	const [searchData, setSearchData] = useState()
	const [coinSearch, setCoinSearch] = useState('')

	const [currency, setCurrency] = useState('usd') // state for changing currency

	const [sortBy, setSortBy] = useState('market_cap_desc') // state for sorting coins

	const [page, setPage] = useState(1) // state for pagination

	const [totalPages, setTotalPages] = useState(250) // state for list of all coins

	const [perpage, setPerPage] = useState(10) // state for sorting per page
	
	const [coinData, setCoinData] = useState() // state for CryptoDetails

	const getCryptodata = async () => {
		try {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/coins/list`
			)
				.then(res => res.json())
				.then((json) => json)

				setTotalPages(data.length)

		}catch(error){
			console.log(error)
		}

		try {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perpage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
			)
				.then(res => res.json())
				.then(json => json)

			console.log(data)
			setCryptoData(data)
		} catch (error) {
			console.log(error)
		}
	}

	const getSearchResult = async query => {
		try {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/search?query=${query}`
			)
				.then(res => res.json())
				.then(json => json)

			console.log(data)
			setSearchData(data.coins)
		} catch (error) {
			console.log(error)
		}
	}

	useLayoutEffect(() => {
		getCryptodata()
	}, [coinSearch, currency, sortBy, page, perpage])

	const resetFunction = () => {
		setPage(1)
		setCoinSearch('')
	}

	const getCoinData = async (coinid) => {
		

		try {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
			)
				.then(res => res.json())
				.then(json => json)

			console.log(data)
			setCoinData(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<CryptoContext.Provider
			value={{
				cryptoData,
				searchData,
				getSearchResult,
				setCoinSearch,
				setSearchData,
				currency,
				setCurrency,
				sortBy,
				setSortBy,
				page,
				setPage,
				totalPages,
				resetFunction,
				setPerPage,	
				perpage,
				getCoinData,coinData

			}}
		>
			{children}
		</CryptoContext.Provider>
	)
}
