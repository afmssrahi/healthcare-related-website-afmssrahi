import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import Service from '../SharedComponents/Service/Service';

const Services = () => {
	const [services] = useFetch(
		'https://gist.githubusercontent.com/afmssrahi/c8d817b77ed8ab3ebb412a0428847d31/raw/0deb6470760fba22b55c8ab753e3d5ce52cb8edb/helloCareService'
	);

	return (
		<div>
			<Container className='pb-5'>
				<div className='text-center py-5'>
					<h1 className='pb-2 text-muted'>Our Hello Care Service</h1>
					<p className='text-muted w-50 mx-auto'>
						We are a one-stop-shop for your health, offering caring
						doctors, world-class diagnostics, and much more.
					</p>
				</div>
				<Row xs={1} md={2} className='g-4'>
					{services.map((service) => (
						<Service
							key={service.id}
							id={service.id}
							name={service.name}
							image={service.image}
							description={service.description}
						></Service>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Services;
