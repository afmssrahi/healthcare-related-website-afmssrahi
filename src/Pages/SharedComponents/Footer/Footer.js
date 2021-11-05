import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='py-5 bg-dark text-white'>
			<Container>
				<Row xs={1} md={4}>
					<Col>
						<NavLink to='/home'>
							<img
								style={{
									height: 50,
									width: 50,
									borderRadius: 14,
								}}
								src='https://hellocareltd.com/img/logo.jpg'
								alt=''
							/>
						</NavLink>
						<span
							style={{
								fontSize: 24,
								padding: 10,
							}}
						>
							Hello Care
						</span>
						<p className='py-3 text-muted'>
							Our goal is to deliver quality of care in a
							courteous, respectful, and compassionate manner. We
							hope you will allow us to care for you and strive to
							be the first and best choice for healthcare.
						</p>
					</Col>
					<Col className='text-center'>
						<h4>All Sections</h4>
						<div className='pt-4'>
							<Nav.Link className='py-0' as={NavLink} to='/home'>
								Header
							</Nav.Link>
							<Nav.Link className='py-0' as={NavLink} to='/home'>
								Hero Section
							</Nav.Link>
							<Nav.Link className='py-0' as={NavLink} to='/home'>
								Services Section
							</Nav.Link>
							<Nav.Link className='py-0' as={NavLink} to='/home'>
								About Section
							</Nav.Link>
							<Nav.Link className='py-0' as={NavLink} to='/home'>
								Footer
							</Nav.Link>
						</div>
					</Col>
					<Col className='text-center'>
						<h4>Quick Links</h4>
						<div className='pt-4'>
							<Nav.Link className='py-0' as={NavLink} to='/home'>
								Home
							</Nav.Link>
							<Nav.Link
								className='py-0'
								as={NavLink}
								to='/services'
							>
								Services
							</Nav.Link>
							<Nav.Link className='py-0' as={NavLink} to='/about'>
								About
							</Nav.Link>
							<Nav.Link
								className='py-0'
								as={NavLink}
								to='/contact'
							>
								Contact
							</Nav.Link>
							<Nav.Link className='py-0' as={NavLink} to='/login'>
								Login
							</Nav.Link>
							<Nav.Link
								className='py-0'
								as={NavLink}
								to='/register'
							>
								Registration
							</Nav.Link>
						</div>
					</Col>
					<Col className='text-center'>
						<h4>Quick Contact</h4>
						<div className='text-muted pt-4'>
							<p>
								Hello Care Limited 44/22/A, North Dhanmondi,
								Kalabagan, Dhaka-1205.
							</p>
							<p>
								+8801778523681, +8801973523681
								info@hellocareltd.com
							</p>
						</div>
					</Col>
				</Row>
			</Container>
			<p className='bg-dark text-muted text-center'>
				Copyright &copy; All Rights Reserve Hello Care
			</p>
		</div>
	);
};

export default Footer;
