import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
	return (
		<div className='py-5'>
			<h1 className='text-center text-muted pb-4'>About Us</h1>
			<Container>
				<Row xs={1} md={2}>
					<Col className='d-flex justify-content-center'>
						<div className='text-muted'>
							<h4>Our Company</h4>
							<p>
								Welcome to know about Hello Care Limited. It was
								established as a pioneer in-home nursing
								services after seeing a need in the community
								for personalized home care.
							</p>
							<p>
								It is located in Dhaka, Bangladesh. Since the
								very beginning of its establishment, we provide
								a world-class nursing home care to its customers
								at their doorsteps. Hello Care understands how
								important it is for families to have their loved
								ones having their medical treatments comfortably
								inside their homes. Our care is based on the
								principles of compassion and a commitment to
								excellence. Our mission is to serve humanity in
								the best possible way.
							</p>

							<h4 className='py-3'>Our Solution</h4>
							<p>
								<strong>
									* Certified home healthcare programs.
								</strong>
							</p>
							<p>
								<strong>
									* Select qualified professionals.
								</strong>
							</p>
							<p>
								<strong>
									* Experienced and credentialed caregivers.
								</strong>
							</p>
							<p>
								<strong>
									* Our staff is on call 24/7 hour.
								</strong>
							</p>
						</div>
					</Col>
					<Col className='about-img'>
						<img
							style={{ borderRadius: 25 }}
							src='https://hellocareltd.com/img/service3.jpg'
							alt='about img'
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default About;
