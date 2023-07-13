import { useLayoutEffect, createContext, useState } from 'react'

//create context object
export const StorageContext = createContext({})

//create the provider component
export const StorageProvider = ({ children }) => {
	const [allCoins, setAllCoins] = useState([])
	
   const saveCoin = (coinId) => {
      let oldCoins = JSON.parse(localStorage.getItem("coins"))

      if(oldCoins.includes(coinId)) {
         return null;

      }else {
         let newCoin = [...oldCoins, coinId];
         setAllCoins(newCoin);
         localStorage.setItem("coins", JSON.stringify(newCoin));
      }
   }

	useLayoutEffect(() => {
      
      let isThere =JSON.parse(localStorage.getItem("coins"))  || false;

      if(!isThere) {
         // set the localstorage with empty array
         localStorage.setItem("coins", JSON.stringify([]))
      } else{
         // set the state with current values from the local storage.
         let totalCoins = JSON.parse(localStorage.getItem("coins"))
         setAllCoins(totalCoins)
      }

	}, [])



	return (
		<StorageContext.Provider
			value={{
            saveCoin
			}}
		>
			{children}
		</StorageContext.Provider>
	)
}
