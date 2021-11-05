import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
	const [error, setError] = useState([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const {
		singInUsingGoogle,
		createUserWithFirebaseEmailAndPassword,
		updateProfileDetails,
		logOut,
		setIsLoadingFunc,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();

	const redirect_uri = location.state?.from || '/';

	const handleGoogleLogIn = () => {
		setIsLoadingFunc(true);
		singInUsingGoogle()
			.then((result) => history.push(redirect_uri))
			.catch((err) => setError(err.toString().split('.')))
			.finally(() => setIsLoadingFunc(false));
	};

	const onSubmit = (data) => {
		setIsLoadingFunc(true);
		if (data.password === data.reEnterPassword) {
			createUserWithFirebaseEmailAndPassword(data.email, data.password)
				.then((result) => {
					updateProfileDetails(data.name)
						.then(() => {
							console.log('user created successfully');
							logOut();
						})
						.catch((err2) => {
							setError(err2.toString().split('.'));
						})
						.finally(() => setIsLoadingFunc(false));
					history.push('/login');
				})
				.catch((err) => setError(err.toString().split('.')))
				.finally(() => setIsLoadingFunc(false));
		} else {
			setError([
				"your password doesn'nt match with previous password.",
				'1',
			]);
		}
	};
	return (
		<div>
			<div className='login-form' id='registration-form'>
				<div className='left'>
					<h2 className='text-white pb-2'>Create Account</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							type='text'
							{...register('name', { required: true })}
							placeholder='Your Name*'
						/>
						{errors.name && (
							<span className='text-danger'>
								This field is required
							</span>
						)}
						<input
							type='email'
							{...register('email', { required: true })}
							placeholder='Your Email*'
						/>
						{errors.email && (
							<span className='text-danger'>
								This field is required
							</span>
						)}
						<input
							type='password'
							{...register('password', { required: true })}
							placeholder='Your Password*'
						/>
						{errors.password && (
							<span className='text-danger'>
								This field is required
							</span>
						)}
						<input
							type='password'
							{...register('reEnterPassword', { required: true })}
							placeholder='Re-enter Password*'
						/>
						{errors.reEnterPassword && (
							<span className='text-danger'>
								This field is required
							</span>
						)}
						<br />
						{error && (
							<h5 className='text-center text-danger py-2'>
								{error[0]}
							</h5>
						)}

						<input type='submit' value='Submit' />
					</form>

					<p className='text-muted'>
						Already have an account?{' '}
						<Link
							to='/login'
							className='btn btn-warning text-white mt-2'
						>
							Log In
						</Link>
					</p>
					<div className='or or-registration'>OR</div>
				</div>
				<div className='right'>
					<span className='loginwith'>
						Sign in with
						<br />
						social network
					</span>
					<button
						onClick={handleGoogleLogIn}
						className='social-signin google'
					>
						Google Sing Up Google+
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
