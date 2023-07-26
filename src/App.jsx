import banner from '../src/assets/image 1.png'

export default function App() {
	return (
		<>
		<div className='hidden md:flex items-center justify-between ml-[160px] mr-[160px] '>
			<div className='w-[440px]'>
				<Image/>
			</div>
			<div className='md:space-y-[52px]'>
				<div className='md:space-y-[16px]'>
					<div className=''>
						<h1 className='font-bold md:text-[64px] text-[#240D57] md:text-end'>Imagine if</h1>
						<h1 className='font-bold md:text-[64px] md:-mt-5 text-transparent md:text-end bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]'>Snapchat</h1>
						<h1 className='font-bold md:text-[64px] md:-mt-8 text-[#240D57] md:text-end'>had events</h1>
					</div>
					<div className=''>
						<p className='text-[#4F4F4F] md:text-[24px] md:text-end font-light'>Easily host and share events with your friends</p>
						<p className='text-[#4F4F4F] md:text-[24px] md:text-end font-light -mt-2'>across any social media.</p>
					</div>
				</div>
				<div className='md:text-end md:space-y-[52px]'>
					<EventButton/>
				</div>
			</div>
		</div>
			
		<div className='hidden md:hidden sm:block mt-[80px]'>
			<div className=''>
				<div className=''>
					<h1 className='font-bold sm:text-[64px] text-[#240D57] sm:text-center'>Imagine if</h1>
					<h1 className='font-bold sm:text-[64px] sm:-mt-8 text-transparent sm:text-center bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]'>Snapchat</h1>
					<h1 className='font-bold sm:text-[64px] sm:-mt-8 text-[#240D57] sm:text-center'>had events</h1>
				</div>
				<div className='mt-[16px]'>
					<p className='text-[#4F4F4F] sm:text-[24px] sm:text-center font-light'>Easily host and share events with your friends</p>
					<p className='text-[#4F4F4F] sm:text-[24px] sm:text-center font-light -mt-2'>across any social media.</p>
				</div>
			</div>
			<div className='flex justify-center mt-[56px]'>	
				<div className='w-[311px]'>
					<Image/>
				</div>
			</div>
			<div className='sm:text-center sm:space-y-[52px] mt-[56px] mb-[60px]'>
				<EventButton/>
			</div>
		</div>

		<div className='sm:hidden md:hidden mt-[40px]'>
			<div className=''>
				<div className=''>
					<h1 className='font-bold text-[36px] text-[#240D57] text-center'>Imagine if</h1>
					<h1 className='font-bold text-[36px] -mt-4 text-transparent text-center bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]'>Snapchat</h1>
					<h1 className='font-bold text-[36px] -mt-4 text-[#240D57] text-center'>had events</h1>
				</div>
				<div className='mt-[16px]'>
					<p className='text-[#4F4F4F] text-[16px] text-center font-light'>Easily host and share events with your friends</p>
					<p className='text-[#4F4F4F] text-[16px] text-center font-light -mt-2'>across any social media.</p>
				</div>
			</div>
			<div className='flex justify-center mt-[36px]'>	
				<div className='w-[311px]'>
					<Image/>
				</div>
			</div>
			<div className='text-center space-y-[32px] mt-[56px] mb-[60px]'>
				<EventButton/>
			</div>
		</div>

	</>

	);
}

function EventButton() {
		return(
			<button className='px-[69.5px] py-[16px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] rounded-[10px] text-[#FFFFFF] text-bold text-[20px]'>
				🎉 Create my event
			</button>
		)
}

function Image(){
	return(
		<>
		<img src={banner}
		/>
		</>
	)
}