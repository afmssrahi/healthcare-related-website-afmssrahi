import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
	const { user, logOut } = useAuth();

	return (
		<div>
			<Navbar bg='dark' variant='dark' collapseOnSelect expand='md'>
				<Container>
					<Navbar.Brand as={NavLink} to='/home'>
						<img
							className='me-2'
							style={{ height: 40, width: 40, borderRadius: 12 }}
							src='https://hellocareltd.com/img/logo.jpg'
							alt=''
						/>
						Hello Care
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='ms-md-auto text-center'>
							<Nav.Link as={NavLink} to='/home'>
								Home
							</Nav.Link>
							<Nav.Link as={NavLink} to='/about'>
								About Us
							</Nav.Link>
							<Nav.Link as={NavLink} to='/services'>
								Services
							</Nav.Link>
							<Nav.Link as={NavLink} to='/contact'>
								Contact Us
							</Nav.Link>
							{user.email && (
								<span
									style={{
										color: 'white',
										padding: 8,
										background: '#48545a',
										marginRight: 4,
										borderRadius: 25,
									}}
								>
									{' '}
									{user.displayName}
								</span>
							)}
							{user.email ? (
								<button
									className='btn btn-primary'
									onClick={logOut}
								>
									Log Out
								</button>
							) : (
								<Nav.Link
									className='btn btn-primary mb-2 mb-md-0'
									as={NavLink}
									to='/login'
								>
									Login
								</Nav.Link>
							)}
							{!user.email && (
								<Nav.Link
									className='btn btn-primary ms-md-2'
									as={NavLink}
									to='/register'
								>
									Register
								</Nav.Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
