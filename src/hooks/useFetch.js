import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, [url]);

	return [services];
};

export default useFetch;
