import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/shared/logo.svg'
import { ReactComponent as BurgerIcon } from '../assets/shared/icon-hamburger.svg'
import { ReactComponent as CloseIcon } from '../assets/shared/icon-close.svg'
import useResponsive from '../hooks/useResponsive'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'

type Pages = { name: string; path: string }[]

export const Navbar = ({ setLocationIndex }: { setLocationIndex: React.Dispatch<React.SetStateAction<number>> }) => {
	const { isMD, isLG } = useResponsive()

	const pages: Pages = [
		{ name: 'home', path: '/' },
		{ name: 'destination', path: '/destination' },
		{ name: 'crew', path: '/crew' },
		{ name: 'technology', path: '/technology' }
	]

	const [show, setShow] = useState<boolean>(false)

	useEffect(() => {
		show ? (document.body.style.position = 'fixed') : (document.body.style.position = '')
	}, [show])

	return (
		<nav className='relative z-50 flex w-full items-center justify-between p-6 md:p-0 lg:py-10 lg:pl-10'>
			<Link to='/'>
				<Logo className='shrink-0 md:mx-8 lg:mx-4' />
			</Link>

			{!isMD && !show && (
				<div className='-m-2 cursor-pointer p-2'>
					<BurgerIcon onClick={() => setShow(true)} />
				</div>
			)}

			{isLG && <div className='z-10 h-[0.1px] w-[120%] -translate-y-1/2 translate-x-8 bg-white/25'></div>}

			<AnimatePresence>
				{(!isMD ? show : true) && (
					<OutsideClickHandler onOutsideClick={() => setShow(false)} display='contents'>
						<motion.div
							className='fixed top-0 right-0 flex h-full flex-col justify-start gap-12 bg-white/5 backdrop-blur-2xl md:relative md:h-auto'
							initial={{ x: '200%' }}
							animate={{ x: 0 }}
							exit={{ x: '110%' }}>
							{!isMD && (
								<CloseIcon onClick={() => setShow(false)} className='m-6 translate-y-1/2 cursor-pointer self-end' />
							)}

							<div className='relative flex w-full flex-col items-start gap-3 md:h-auto md:flex-row md:gap-10 md:px-10 lg:gap-12 lg:pl-24 lg:pr-28 xl:gap-14 xl:pl-32 xl:pr-44'>
								{pages.map((page, index) => (
									<NavLink
										to={page.path}
										key={index}
										onClick={() => {
											setShow(false)
											setLocationIndex(index)
										}}
										className='nav-link relative w-full py-2 pl-8 pr-24 after:absolute after:h-0 after:w-1 after:bg-white/30 after:duration-300 after:ease-out max-md:after:top-1/2 max-md:after:right-0  max-md:after:-translate-y-1/2 max-md:hover:after:h-3/4 md:px-0 md:py-10 md:after:bottom-0 md:after:left-1/2 md:after:h-1 md:after:w-0 md:after:-translate-x-1/2 md:after:hover:w-full'>
										<p className='text-sans'>
											{(!isMD || isLG) && <span className='mr-2 font-bold lg:mr-3'>0{index}</span>}
											<span className='uppercase tracking-[2.7px]'>{page.name}</span>
										</p>
									</NavLink>
								))}
							</div>
						</motion.div>
					</OutsideClickHandler>
				)}
			</AnimatePresence>
		</nav>
	)
}
