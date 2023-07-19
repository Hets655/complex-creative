import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Axios from 'axios';

const Blog = () => {
	let { pID } = useParams();
	const [pDeatils, setpDeatils] = useState([]);
	
	useEffect(()=>{
		console.log(pDeatils);
		let url = 'http://siteproofs.com/projects/hetal/wp/wp-json/wp/v2/posts/' + pID;
		Axios.get(`http://siteproofs.com/projects/hetal/wp/wp-json/wp/v2/posts/`  + {pID}).then((res)=>{
			setpDeatils(res.data)
		});
	
	}, []);
	console.log(pDeatils);
	let embeddetails = pDeatils._embedded;
	return (
		<div className='blogsingle'>
			{pDeatils.title.rendered}
		</div>
	)
}

export default Blog;