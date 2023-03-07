import { useState } from 'react'
import { MotionSlider, PageTitle } from '../components'
import { data } from '../data/data'
import useResponsive from '../hooks/useResponsive'

export const Technology = () => {
	const { isLG } = useResponsive()

	const [page, setPage] = useState(0)

	const technology = data.technology[page]

	return (
		<div className='technology mb-8 flex grow flex-col items-center'>
			<PageTitle pageNumber={3}>space launch 101</PageTitle>

			<MotionSlider
				page={page}
				setPage={setPage}
				vertical={isLG}
				dataLength={data.technology.length}
				className='2xl:wrapper flex w-full grow cursor-grab flex-col items-center lg:flex-row-reverse lg:gap-12'>
				<div className='w-full xl:w-auto xl:shrink-0 xl:grow 2xl:shadow-lg'>
					<img
						src={isLG ? technology?.images.portrait : technology?.images.landscape}
						alt=''
						className='w-full'
						draggable='false'
					/>
				</div>

				<div className='wrapper flex flex-col items-center lg:ml-20 lg:max-xl:items-start xl:ml-32 xl:flex-row xl:gap-16 2xl:ml-0'>
					<div className='my-8 flex items-center gap-4 md:my-12 lg:mt-0 lg:mb-12 xl:mb-0 xl:flex-col xl:gap-8'>
						{data?.technology.map((item, index: number) => (
							<span
								key={index}
								className={`grid h-10 w-10 cursor-pointer place-items-center rounded-full border font-serif md:h-[60px] md:w-[60px] md:text-2xl lg:h-20 lg:w-20 lg:text-[32px] ${
									page === index ? 'bg-white text-dark' : 'border-white/20 duration-300 hover:border-white'
								}`}
								onClick={() => setPage(index)}>
								{index + 1}
							</span>
						))}
					</div>

					<div className='text-center lg:shrink-0 lg:text-start xl:inline-block'>
						<h2 className='mb-1.5 text-sm uppercase tracking-[2.36px] text-secondary md:mb-4 md:text-base md:tracking-[2.7px] lg:mb-6'>
							the terminology
						</h2>

						<h1 className='mb-4 font-serif text-2xl uppercase md:mb-6 md:text-[40px] lg:mb-8 lg:min-w-max lg:text-[56px]'>
							{technology.name}
						</h1>

						<p className='mb-7 flex max-w-prose font-sans text-[15px] leading-7 text-secondary md:mb-0 md:max-w-[50ch] md:text-base lg:text-lg lg:leading-8'>
							{technology.description}
						</p>
					</div>
				</div>
			</MotionSlider>
		</div>
	)
}
