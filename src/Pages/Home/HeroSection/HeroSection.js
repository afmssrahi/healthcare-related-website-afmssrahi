import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import heroSEctionImage from '../../../images/hero-section-img.jpg';
import './HeroSection.css';

const HeroSection = () => {
	return (
		<>
			<Container className='py-5'>
				<Row xs={1} md={2}>
					<Col className='d-flex justify-content-center align-items-center'>
						<div>
							<h1 className='text-muted'>
								Bring care to your home with one click
							</h1>
							<p className='py-2 text-muted'>
								Our goal is to deliver quality of care in a
								courteous, respectful, and compassionate manner.
								We hope you will allow us to care for you and
								strive to be the first and best choice for
								healthcare.
							</p>
							<NavLink className='btn btn-primary ' to='/about'>
								About Us
							</NavLink>
						</div>
					</Col>
					<Col className='hero-section-img'>
						<img src={heroSEctionImage} alt='hero img' />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default HeroSection;
