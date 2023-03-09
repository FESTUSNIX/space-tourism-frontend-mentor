import { AnimatePresence, motion } from 'framer-motion'
import { Route, useLocation } from 'react-router'
import { Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Crew } from './pages/Crew'
import { Destinations } from './pages/Destinations'
import { Home } from './pages/Home'
import { Technology } from './pages/Technology'
import { useState } from 'react'
import './App.css'
import usePrevious from './hooks/usePrevious'
import useResponsive from './hooks/useResponsive'

type variantProps = {
	prevLocationIndex: number
	locationIndex: number
	isMD: boolean
}

const containerVariants = {
	initalState: ({ prevLocationIndex, locationIndex, isMD }: variantProps) => {
		const direction = isMD
			? { x: prevLocationIndex > locationIndex ? '-100vw' : '100vw' }
			: { y: prevLocationIndex > locationIndex ? '-100vh' : '100vh' }

		return {
			...direction
		}
	},
	animateState: ({ isMD }: variantProps) => {
		const direction = isMD ? { x: 0 } : { y: 0 }

		return {
			...direction,
			transition: { duration: 0.3 }
		}
	},
	exitState: ({ prevLocationIndex, locationIndex, isMD }: variantProps) => {
		const direction = isMD
			? { x: prevLocationIndex > locationIndex ? '100vw' : '-100vw' }
			: { y: prevLocationIndex > locationIndex ? '100vh' : '-100vh' }

		return {
			...direction,
			transition: { ease: 'easeInOut' }
		}
	}
}

function App() {
	const { isMD } = useResponsive()

	const location = useLocation()

	const [locationIndex, setLocationIndex] = useState(0)
	const prevLocationIndex = usePrevious(locationIndex, 0)

	return (
		<div className='App'>
			<Navbar setLocationIndex={setLocationIndex} />
			<AnimatePresence mode='wait' initial={false} custom={{ prevLocationIndex, locationIndex, isMD }}>
				<motion.div
					key={location.key}
					variants={containerVariants}
					initial='initalState'
					animate='animateState'
					exit='exitState'
					custom={{ prevLocationIndex, locationIndex, isMD }}
					className='flex h-full w-full grow flex-col'>
					<Routes location={location} key={location.key}>
						<Route path='/' element={<Home />} />
						<Route path='/destination' element={<Destinations />} />
						<Route path='/crew' element={<Crew />} />
						<Route path='/technology' element={<Technology />} />
					</Routes>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default App
