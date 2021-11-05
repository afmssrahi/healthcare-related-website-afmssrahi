import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
	return (
		<div>
			<Container className='py-5'>
				<h2 className='text-muted text-center pb-5'>Contact Us</h2>
				<Row xs={1} md={2}>
					<Col>
						<h4 className='text-muted'>Get IN TOUCH</h4>
						<p>
							Our Service 24 hours and 7 days any time anywhere,
							just call us and confirm, within 2 hours we send any
							service to your home by our active team.
						</p>

						<h5 className='text-primary'>Hello Care Limited</h5>
						<p className='text-muted'>
							44/22/A, North Dhanmondi, Kalabagan, Dhaka-1205.
						</p>
						<br />
						<p className='text-danger'>
							Hotline: +8801778523681, +8801973523681
						</p>
						<p className='text-muted'>info@hellocareltd.com</p>
					</Col>
					<Col>
						<Form>
							<Row xs={1} md={2}>
								<Col className='py-2'>
									<Form.Control placeholder='First name' />
								</Col>
								<Col className='py-2'>
									<Form.Control placeholder='Last name' />
								</Col>
							</Row>
							<Row className='py-2' style={{ margin: '0 auto' }}>
								<Form.Control
									as='textarea'
									placeholder='Leave a comment here'
									style={{ height: '180px' }}
								/>
								<Button className='btn btn-primary my-3'>
									Send
								</Button>
							</Row>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
