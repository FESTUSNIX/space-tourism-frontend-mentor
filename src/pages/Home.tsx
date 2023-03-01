import { Link } from 'react-router-dom'
export const Home = () => {
	return (
		<div className='wrapper home mt-5 mb-12 flex h-full grow flex-col items-center justify-between'>
			<div className='text-center'>
				<h2 className='mb-1 text-base uppercase tracking-[2.7px] text-secondary'> So, you want to travel to</h2>
				<h1 className='mb-1 font-serif text-[80px] uppercase'>space</h1>
				<h3 className='font-sans text-[15px] text-secondary'>
					Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
					on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
				</h3>
			</div>

			<Link to='/destination' className='group relative h-40 w-40'>
				<div className='absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white/10 backdrop-blur-lg duration-300 ease-in-out group-hover:scale-100'></div>
				<div className='relative grid h-full w-full place-items-center rounded-full bg-white font-serif text-xl uppercase tracking-[1.25px] text-dark'>
					explore
				</div>
			</Link>
		</div>
	)
}
