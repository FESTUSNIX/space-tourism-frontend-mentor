import { useState } from 'react'
import { MotionSlider, PageTitle } from '../components'
import { data } from '../data/data'

export const Destinations = () => {
	const [page, setPage] = useState(0)

	const destinations = data.destinations[page]
	return (
		<div className='destinations flex flex-col items-center'>
			<PageTitle pageNumber={1}>pick your destination</PageTitle>

			<MotionSlider
				page={page}
				setPage={setPage}
				dataLength={data.destinations.length}
				className='wrapper flex w-full cursor-grab flex-col items-center lg:flex-row lg:items-end lg:justify-center lg:gap-20 xl:gap-32 xl:px-24'>
				<img
					src={destinations.images.webp}
					alt=''
					draggable='false'
					className='mb-8 w-1/2 max-w-md grow md:max-lg:w-80'
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
			</MotionSlider>
		</div>
	)
}
