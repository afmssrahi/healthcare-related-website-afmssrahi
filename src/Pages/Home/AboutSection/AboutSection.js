import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutSectionImage from './../../../images/about-img.jpg';

const AboutSection = () => {
	return (
		<div className='pt-2 pb-5'>
			<h2 className='text-center text-muted'>About Us</h2>
			<Container>
				<Row xs={1} md={2}>
					<Col className='about-img'>
						<img
							className='pe-5'
							src={AboutSectionImage}
							alt='about img'
						/>
					</Col>
					<Col className='d-flex justify-content-center align-items-center'>
						<div className='pe-md-5'>
							<p className='text-justify text-muted'>
								Welcome to know about Hello Care Limited. It was
								established as a pioneer in-home nursing
								services after seeing a need in the community
								for personalized home care.
							</p>
							<p className='text-justify text-muted'>
								It is located in Dhaka, Bangladesh. Since the
								very beginning of its establishment, we provide
								a world-class nursing home care to its customers
								at their doorsteps.
							</p>
							<p className='text-justify text-muted'>
								Hello Care understands how important it is for
								families to have their loved ones having their
								medical treatments comfortably inside their
								homes. Our care is based on the principles of
								compassion and a commitment to excellence. Our
								mission is to serve humanity in the best
								possible way.
							</p>
							<p className='text-justify text-muted'>
								Our mission is to serve humanity in the best
								possible way.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AboutSection;
