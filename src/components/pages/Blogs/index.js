import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

const Blogs = () => {
	const [posts, setPosts] = useState([]);
	useEffect(()=>{
		let url = 'http://siteproofs.com/projects/hetal/wp/wp-json/wp/v2/posts?_embed';
		Axios.get(url).then((res)=>{
			setPosts(res.data);
		});
		
	}, []);
	return (
		<div className="container">
			<div className="w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 p-10 gap-10">
				{
					posts.map((post,index)=>(
						<div className=" card p-3 w-96 shadow-lg rounded-lg" key={index}>
							<div className="blog-image">
								<img 
									src={post._embedded['wp:featuredmedia'][0].source_url} 
									className="img-responsive" 
									alt={post._embedded['wp:featuredmedia'][0].alt_text} 
								/>
							</div>
							<h2 className="text-lg font-bold px-3 py-2">
								<Link to={`/blog/` + post.id}>{post.title.rendered}</Link>
							</h2>
							<p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} className='p-3'></p>
							<div className='px-3 py-2'>
								<Link className="px-3 py-2 my-3 text-white bg-gray-800" to={`/blog/` + post.id}>
									More info
								</Link>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Blogs;