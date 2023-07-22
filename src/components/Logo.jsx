import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from '../assets/logoo.svg'

const Logo = () => {
	return (
		<Link to='/' className='absolute top-[1.5rem] left-[3rem] text-xl text-amber-500 flex'>
			<img src={logoSvg} alt='CoinVibe logo'  className='mr-3'/>
         <span>CoinVibe</span>
		</Link>
	)
}

export default Logo
