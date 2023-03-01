import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/shared/logo.svg'
import { ReactComponent as BurgerIcon } from '../assets/shared/icon-hamburger.svg'
import { ReactComponent as CloseIcon } from '../assets/shared/icon-close.svg'
import useResponsive from '../useResponsive'
import { useState } from 'react'

type Pages = { name: string; path: string }[]

export const Navbar = () => {
	const { isXS } = useResponsive()

	const pages: Pages = [
		{ name: 'home', path: '/' },
		{ name: 'destination', path: '/destination' },
		{ name: 'crew', path: '/crew' },
		{ name: 'technology', path: '/technology' }
	]

	const [show, setShow] = useState<boolean>(false)

	return (
		<nav className='wrapper flex items-center justify-between'>
			<Logo />

			{isXS && !show && <BurgerIcon />}

			{show && (
				<div className=''>
					<CloseIcon />

					{pages.map((page, index) => (
						<NavLink to={page.path} key={index}>
							0{index} {page.name}
						</NavLink>
					))}
				</div>
			)}
		</nav>
	)
}
