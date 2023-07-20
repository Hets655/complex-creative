import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Axios from 'axios';

const Blog = () => {
	let { pID } = useParams();
	const [Pdeatils, setPdeatils] = useState([]);
	
	useEffect(()=>{
		let url = 'https://chandanbrass.com/wp/wp-json/wp/v2/posts/25?_embed';
		Axios.get(url).then((res)=>{
			setPdeatils(res.data)
			console.log('inside', res.data)
		});
	
	}, []);
	console.log(url);
	console.log(Pdeatils);
	return (
		<div className='container'>
			{Pdeatils.title.rendered}
		</div>
	)
}

export default Blog;