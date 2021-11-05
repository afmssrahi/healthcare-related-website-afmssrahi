import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css';

const Login = () => {
	const [error, setError] = useState([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { singInUsingGoogle, singInUsingEmailAndPassword, setIsLoadingFunc } =
		useAuth();
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
		singInUsingEmailAndPassword(data.email, data.password)
			.then((result) => history.push(redirect_uri))
			.catch((err) => setError(err.toString().split('.')))
			.finally(() => setIsLoadingFunc(false));
	};

	return (
		<div>
			<div className='login-form' id='login-box'>
				<div className='left'>
					<h2 className='text-white pb-2'>Login</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
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

						{error && (
							<h5 className='text-center text-danger py-2'>
								{error[0]}
							</h5>
						)}

						<input type='submit' value='Submit' />
					</form>
					<p className='text-muted'>
						New to Hello Care?{' '}
						<Link
							className='btn btn-warning text-white mt-2'
							to='/register'
						>
							Create Account
						</Link>
					</p>

					<div className='or'>OR</div>
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
						Log in with Google+
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
