import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Axios from 'axios';

const Blog = () => {
	let { pID } = useParams();
	
	const [Pdeatils, setPdeatils] = useState([]);
	useEffect(()=>{
		console.log('useEffect called');
		getData();
		
	});

	const getData = () => {
		console.log('getdata called');
		let url = 'https://chandanbrass.com/wp/wp-json/wp/v2/posts/' + pID  + '?_embed';
		Axios.get(url).then((res)=>{
			setPdeatils(res.data)
			console.log('inside', res.data)
		}); 
			
	}
	
	console.log(getData);
	return (
		<>
		<div className='container'>
			{Pdeatils.title.rendered}
		</div>
		</>
	)
}

export default Blog;