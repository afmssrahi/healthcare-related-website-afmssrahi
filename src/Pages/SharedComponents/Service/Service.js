import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
	const { id, name, image, description } = props;

	return (
		<Col>
			<Card>
				<Card.Img variant='top' src={image} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>{description}</Card.Text>
					<Link to={`/service/${id}`}>
						<Button variant='primary'>Learn More</Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Service;
