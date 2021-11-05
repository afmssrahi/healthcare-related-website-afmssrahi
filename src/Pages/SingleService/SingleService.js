import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';

const SingleService = () => {
	const { serviceId } = useParams();
	const [services] = useFetch(
		'https://gist.githubusercontent.com/afmssrahi/c8d817b77ed8ab3ebb412a0428847d31/raw/0deb6470760fba22b55c8ab753e3d5ce52cb8edb/helloCareService'
	);

	return (
		<div className='py-5'>
			<Container>
				<Row xs={1} md={2}>
					<Col className='d-flex justify-content-center'>
						<div className='text-muted'>
							<h2>{services[serviceId - 1]?.name}</h2>
							<p>{services[serviceId - 1]?.description}</p>

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
							src={services[serviceId - 1]?.image}
							alt='service img'
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SingleService;
