import { Link } from 'react-router-dom'
export const Home = () => {
	return (
		<div className='wrapper home mt-5 mb-12 flex h-full grow flex-col items-center justify-between sm:mt-10 md:mt-24 md:max-lg:max-w-xs lg:mb-40 lg:flex-row lg:items-end'>
			<div className='max-lg:text-center lg:mr-40'>
				<h2 className='mb-1 text-base uppercase tracking-[2.7px] text-secondary sm:text-lg md:mb-6 md:text-xl md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]'>
					So, you want to travel to
				</h2>
				<div className='inline-block'>
					<h1 className='mb-1 font-serif text-[80px] uppercase sm:text-9xl md:mb-6 md:text-[150px]'>space</h1>
					<h3 className='flex font-sans text-[15px] leading-6 text-secondary max-md:mx-6 md:text-base md:leading-7 lg:text-lg lg:leading-8'>
						<div className='lg:w-0 lg:grow'>
							Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
							experience!
						</div>
					</h3>
				</div>
			</div>

			<Link
				to='/destination'
				className='group relative mt-14 h-40 w-40 shrink-0 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-64 lg:w-64 xl:h-72 xl:w-72'>
				<div className='absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white/10 backdrop-blur-lg duration-300 ease-in-out group-hover:scale-100'></div>
				<div className='relative grid h-full w-full place-items-center rounded-full bg-white font-serif text-xl uppercase tracking-[1.25px] text-dark md:text-3xl'>
					explore
				</div>
			</Link>
		</div>
	)
}
