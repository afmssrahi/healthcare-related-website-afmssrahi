import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFetch from '../../../hooks/useFetch';
import Service from '../../SharedComponents/Service/Service';

const ServiceSection = () => {
	const [services] = useFetch(
		'https://gist.githubusercontent.com/afmssrahi/c8d817b77ed8ab3ebb412a0428847d31/raw/0deb6470760fba22b55c8ab753e3d5ce52cb8edb/helloCareService'
	);

	return (
		<div>
			<Container>
				<h2 className='text-center text-muted'>Our Services</h2>
				<Row xs={1} md={3} className='g-4 py-5'>
					{services.map((service) => (
						<Service
							key={service.id}
							id={service.id}
							name={service.name}
							image={service.image}
							description={service.description
								.slice(0, 150)
								.concat('...')}
						></Service>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ServiceSection;
