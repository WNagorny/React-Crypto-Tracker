import { useLayoutEffect, createContext, useState } from 'react'

//create context object
export const TrendingContext = createContext({})

//create the provider component
export const TrendingProvider = ({ children }) => {
	const [trendData, setTrendData] = useState()
	

	const getTrendData = async () => {

		try {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/search/trending`
			)
				.then(res => res.json())
				.then(json => json)

			console.log('CryptoData', data)
			setTrendData(data)
		} catch (error) {
			console.log(error)
		}
	}

   const resetTrendingResult = () => {
		
		getTrendData()
	}


	useLayoutEffect(() => {
		getTrendData()
	}, [])



	return (
		<TrendingContext.Provider
			value={{
            trendData,
            resetTrendingResult
			}}
		>
			{children}
		</TrendingContext.Provider>
	)
}
