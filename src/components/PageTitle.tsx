type Props = {
	children: React.ReactNode
	pageNumber: number
}

export const PageTitle = ({ children, pageNumber }: Props) => {
	return (
		<h3 className='md:wrapper mx-8 mb-8 w-full text-base uppercase tracking-[2.7px] max-md:text-center md:mt-10 md:mb-16 md:self-start md:text-xl md:tracking-[3.38px] lg:mb-16 lg:text-[28px] lg:tracking-[4.72px]'>
			<span className='font-bold text-white/25'>0{pageNumber}</span> {children}
		</h3>
	)
}
