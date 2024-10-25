// LoginForm.jsx
import React from "react";
import { TEInput, TERipple } from "tw-elements-react";

const LoginForm = () => {
	return (
		<section className='mt-10'>
			<div className='container h-full px-6 py-24'>
				<div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
					{/* Left column with image */}
					<div className='mb-12 md:mb-0 md:w-8/12 lg:w-6/12'></div>

					{/* Right column with form */}
					<div className='md:w-8/12 lg:ml-6 lg:w-5/12'>
						<form>
							<TEInput
								type='email'
								label='Email address'
								size='lg'
								className='mb-6'
							/>
							<TEInput
								type='password'
								label='Password'
								className='mb-6'
								size='lg'
							/>

							{/* Remember me checkbox */}
							<div className='mb-6 flex items-center justify-between'>
								<div className='mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]'>
									<input
										className='relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none'
										type='checkbox'
										id='exampleCheck3'
										defaultChecked
									/>
									<label
										className='inline-block pl-[0.15rem] hover:cursor-pointer'
										htmlFor='exampleCheck3'
									>
										Remember me
									</label>
								</div>
								<a href='#!' className='text-primary'>
									Terms and conditions
								</a>
							</div>

							{/* Submit button */}
							<TERipple rippleColor='light' className='w-full'>
								<button
									type='button'
									className='inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase text-white'
								>
									Sign up
								</button>
							</TERipple>

							<div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
								<p className='mx-4 mb-0 text-center font-semibold'>OR</p>
							</div>

							{/* Social login buttons */}
							<TERipple rippleColor='light' className='w-full'>
								<a
									className='mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium text-white'
									href='#!'
								>
									Continue with Facebook
								</a>
							</TERipple>
							<TERipple rippleColor='light' className='w-full'>
								<a
									className='mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-sm font-medium text-white'
									href='#!'
								>
									Continue with Twitter
								</a>
							</TERipple>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginForm;
