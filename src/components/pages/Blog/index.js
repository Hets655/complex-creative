import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Axios from 'axios';

const Blog = () => {
	let { pID } = useParams();
	const [pDeatils, setpDeatils] = useState([]);
	let url = 'https://chandanbrass.com/wp/wp-json/wp/v2/posts/' + pID  + '?_embed';
	useEffect(()=>{
		
		Axios.get(url).then((res)=>{
			setpDeatils(res.data)
			console.log('inside	', res.data)
		});
	
	}, []);
	console.log(url);
	console.log(pDeatils);
	return (
		<div className='container'>
			{pDeatils.title.rendered}
		</div>
	)
}

export default Blog;