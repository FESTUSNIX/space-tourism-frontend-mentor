import React, { useState } from 'react'
import { PageTitle } from '../components'
import { data } from '../data/data'

export const Crew = () => {
	const [currentPage, setCurrentPage] = useState<number>(0)

	const crew = data.crew[currentPage]

	return (
		<div className='crew flex grow flex-col items-center'>
			<PageTitle pageNumber={2}>meet your crew</PageTitle>

			<div className='wrapper flex w-full grow flex-col items-center md:flex-col-reverse xl:flex-row-reverse xl:items-end xl:justify-between xl:gap-12'>
				<div className='relative flex w-full border-white/20 max-md:mb-8 max-md:border-b md:mt-auto md:h-0 md:max-w-xl md:grow xl:h-auto xl:w-auto xl:shrink-0 xl:grow'>
					<img
						src={crew.images.webp}
						alt=''
						className='mx-auto max-md:w-1/2 xl:absolute xl:bottom-0 xl:left-1/2 xl:max-w-3xl xl:-translate-x-1/2'
					/>
				</div>

				<div className='flex flex-col items-center md:mb-4 xl:mb-8 xl:items-start'>
					<div className='mb-8 flex gap-4 text-sm uppercase tracking-[2.36px] text-secondary md:order-1 md:mb-10 md:mt-10 md:text-base xl:mb-12 xl:gap-6'>
						{data?.crew.map((crewMember, index: number) => (
							<span
								key={index}
								className={`cursor-pointer rounded-full p-1.5 lg:p-2 ${
									currentPage === index ? 'bg-white' : 'bg-white/20 duration-300 hover:bg-white/50'
								}`}
								onClick={() => setCurrentPage(index)}></span>
						))}
					</div>

					<h2 className='font-serif uppercase text-white/50 md:mb-4 md:text-2xl lg:mb-8 lg:text-[32px]'>{crew.role}</h2>

					<div className='text-center xl:text-start'>
						<h1 className='mb-4 font-serif text-2xl uppercase md:mb-6 md:text-[40px] lg:mb-12 lg:text-[56px]'>
							{crew.name}
						</h1>
						<div>
							<p className='mb-7 flex max-w-prose text-center font-sans text-[15px] leading-7 text-secondary md:mb-0 md:max-w-[50ch] md:text-base lg:text-xl lg:leading-8 xl:mb-20 xl:text-start'>
								<span className='xl:w-0 xl:grow'>{crew.bio}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
