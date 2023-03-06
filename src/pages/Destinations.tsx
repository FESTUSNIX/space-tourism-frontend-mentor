import { useEffect, useRef, useState } from 'react'
import { PageTitle } from '../components'
import { data } from '../data/data'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import usePrevious from '../hooks/usePrevious'
import useResponsive from '../hooks/useResponsive'

const variants = {
	initialState: ({ prevPage, page }: { prevPage: number; page: number }) => {
		return {
			x: prevPage > page ? '-100%' : '100%',
			transition: { duration: 0.5, ease: 'easeInOut' }
		}
	},
	animateState: {
		x: 0
	},
	exitState: ({ prevPage, page }: { prevPage: number; page: number }) => {
		return {
			x: prevPage > page ? '100%' : '-100%',
			transition: { ease: 'easeInOut' }
		}
	}
}

export const Destinations = () => {
	const { isMD } = useResponsive()

	const [page, setPage] = useState(0)
	const prevPage = usePrevious(page)

	const destinations = data.destinations[page]

	const x = useMotionValue(0)
	const dragDistance = isMD ? 150 : 100

	const circlePathRight = useTransform(x, [-dragDistance, -50, 0, dragDistance], [1, 0, 0, 0])
	// const circleOpacityRight = useTransform(x, [-dragDistance, -50, 0, dragDistance], [1, 0, 0, 0])

	const circlePathLeft = useTransform(x, [-dragDistance, 0, 50, dragDistance], [0, 0, 0, 1])
	// const circleOpacityLeft = useTransform(x, [-dragDistance, 0, 50, dragDistance], [0, 0, 0, 1])

	// const draggable = useRef<HTMLDivElement>(null)

	const handleDrag = () => {
		circlePathLeft.set(0)

		if (x.get() > dragDistance) {
			if (page === 0) return setPage(data.destinations.length - 1)
			setPage(page - 1)
		}
		if (x.get() < -dragDistance) {
			if (page === data.destinations.length - 1) return setPage(0)
			setPage(page + 1)
		}
	}

	return (
		<div className='destinations flex flex-col items-center'>
			<PageTitle pageNumber={1}>pick your destination</PageTitle>

			<AnimatePresence mode='wait' initial={false} custom={{ prevPage, page }}>
				<motion.div
					key={page}
					variants={variants}
					initial='initialState'
					animate='animateState'
					exit='exitState'
					custom={{ prevPage, page }}
					drag='x'
					dragConstraints={{ left: 0, right: 0 }}
					dragTransition={{ bounceStiffness: 600, bounceDamping: 16 }}
					style={{ x }}
					onDragEnd={() => handleDrag()}
					// ref={draggable}
					className='wrapper flex w-full cursor-grab flex-col items-center lg:flex-row lg:items-end lg:justify-center lg:gap-20 xl:gap-32 xl:px-24'>
					<img
						src={destinations.images.webp}
						alt=''
						draggable='false'
						className='mb-8 w-1/2 max-w-md grow select-none md:max-lg:w-80'
					/>

					<div className='flex flex-col items-center lg:items-start'>
						<div className='mb-8 flex gap-7 text-sm uppercase tracking-[2.36px] text-secondary md:mb-10 md:gap-8 md:text-base md:tracking-[2.7px] lg:mb-12'>
							{data?.destinations.map((destination, index: number) => (
								<h3
									key={destination.name}
									onClick={() => {
										setPage(index)
									}}
									className={`cursor-pointer border-b-[3px] py-1.5 duration-300 ${
										index === page ? 'border-white' : 'border-b-transparent hover:border-white/50'
									}`}>
									{destination.name}
								</h3>
							))}
						</div>

						<h1 className='font-serif text-6xl uppercase md:mb-4 md:text-[80px] lg:mb-6 lg:text-8xl'>
							{destinations.name}
						</h1>

						<p className='mb-7 max-w-prose text-center font-sans text-[15px] leading-7 text-secondary md:mb-14 md:text-base lg:mb-16 lg:max-w-[50ch] lg:text-start lg:text-lg lg:leading-8'>
							{destinations.description}
						</p>

						<div className='flex w-full flex-col items-center justify-center gap-6 border-t border-white/20 py-8 text-center uppercase sm:flex-row md:gap-24 lg:justify-start lg:gap-12 lg:text-start'>
							<div>
								<p className='mb-2 text-sm tracking-[2.36px] text-secondary'>avg. distance</p>
								<p className='font-serif text-[28px]'>{destinations.distance}</p>
							</div>
							<div>
								<p className='mb-2 text-sm tracking-[2.36px] text-secondary'>est. travel time</p>
								<p className='font-serif text-[28px]'>{destinations.travel}</p>
							</div>
						</div>
					</div>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='0.5'
						strokeLinecap='square'
						strokeLinejoin='miter'
						className='feather feather-arrow-left-circle fixed left-0 top-1/2 h-12 w-12 -translate-y-1/2 -translate-x-full md:h-16 md:w-16'>
						<motion.circle cx='12' cy='12' r='10' style={{ pathLength: circlePathLeft }}></motion.circle>
						<motion.polyline points='12 8 8 12 12 16' style={{ pathLength: circlePathLeft }}></motion.polyline>
						<motion.line x1='16' y1='12' x2='8' y2='12' style={{ pathLength: circlePathLeft }}></motion.line>
					</svg>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='0.5'
						strokeLinecap='square'
						strokeLinejoin='miter'
						className='feather feather-arrow-right-circle fixed right-0 top-1/2 h-12 w-12 -translate-y-1/2 translate-x-full md:h-16 md:w-16'>
						<motion.circle cx='12' cy='12' r='10' style={{ pathLength: circlePathRight }}></motion.circle>
						<motion.polyline points='12 16 16 12 12 8' style={{ pathLength: circlePathRight }}></motion.polyline>
						<motion.line x1='8' y1='12' x2='16' y2='12' style={{ pathLength: circlePathRight }}></motion.line>
					</svg>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
