import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/shared/logo.svg'
import { ReactComponent as BurgerIcon } from '../assets/shared/icon-hamburger.svg'
import { ReactComponent as CloseIcon } from '../assets/shared/icon-close.svg'
import useResponsive from '../hooks/useResponsive'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'

type Pages = { name: string; path: string }[]

export const Navbar = () => {
	const { isMD, isLG } = useResponsive()

	const pages: Pages = [
		{ name: 'home', path: '/' },
		{ name: 'destination', path: '/destination' },
		{ name: 'crew', path: '/crew' },
		{ name: 'technology', path: '/technology' }
	]

	const [show, setShow] = useState<boolean>(false)

	return (
		<nav className='relative w-full p-6 flex items-center justify-between md:p-0 lg:py-10 lg:pl-10'>
			<Logo className='md:mx-8 lg:mx-4 shrink-0' />

			{!isMD && !show && (
				<div className='cursor-pointer p-2 -m-2'>
					<BurgerIcon onClick={() => setShow(true)} />
				</div>
			)}

			{isLG && <div className='h-[0.1px] w-[120%] -translate-y-1/2 translate-x-8 bg-white/25 z-10'></div>}

			<AnimatePresence>
				<OutsideClickHandler onOutsideClick={() => setShow(false)} display='contents'>
					{(!isMD ? show : true) && (
						<motion.div
							className='h-full fixed top-0 right-0 flex flex-col justify-start gap-12 bg-white/5 backdrop-blur-2xl nav-animation md:relative md:h-auto '
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '110%' }}>
							{!isMD && (
								<CloseIcon onClick={() => setShow(false)} className='self-end translate-y-1/2 m-6 cursor-pointer' />
							)}

							<div
								className='relative w-full flex flex-col items-start gap-3 md:flex-row md:h-auto md:gap-10 md:px-10 
							lg:gap-12 lg:pl-24 lg:pr-28
							xl:gap-14 xl:pl-32 xl:pr-44'>
								{pages.map((page, index) => (
									<NavLink to={page.path} key={index} className='nav-link'>
										<p className='text-sans'>
											{(!isMD || isLG) && <span className='font-bold mr-2 lg:mr-3'>0{index}</span>}
											<span className='uppercase tracking-[2.7px]'>{page.name}</span>
										</p>
									</NavLink>
								))}
							</div>
						</motion.div>
					)}
				</OutsideClickHandler>
			</AnimatePresence>
		</nav>
	)
}
