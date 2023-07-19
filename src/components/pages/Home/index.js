import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';

const Home = () => {
	const [pages, setPages] = useState([]);
	const [posts, setPosts] = useState([]);
	
	useEffect(()=>{
		let url = 'http://siteproofs.com/projects/hetal/wp/wp-json/wp/v2/pages?_embed';
		Axios.get(url).then((res)=>{
			setPages(res.data);
		});

		let url2 = 'http://siteproofs.com/projects/hetal/wp/wp-json/wp/v2/posts?_embed&per_page=2&offset=2';
		Axios.get(url2).then((res)=>{
			setPosts(res.data);
		});
		
	}, []);
	
	return (
		<div className="container">
			{
				pages.map((page,index)=>(
					<div className="homepageloop" key={index}>
						<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
							<img
								src={page._embedded['wp:featuredmedia'][0].source_url}
								alt={page.title.rendered}
								className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
							/>
							<div
								className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
								aria-hidden="true"
							>
								<div
								className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
								style={{
									clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
								}}
								/>
							</div>
							<div
								className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
								aria-hidden="true"
							>
								<div
								className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
								style={{
									clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
								}}
								/>
							</div>
						</div>
						<div className="space-y-12 py-10 pl-10 pr-10">
							<div className="border-b border-gray-900/10 pb-12">
								 <p dangerouslySetInnerHTML={{__html: page.content.rendered}}></p>
							</div>
						</div>
					</div>
				))
			}
			<div className="latestposts">
				<h2 className="text-lg font-bold text-center">Latest Blogs</h2>
				<div className="w-3/4 py-10 m-auto flex justify-between align-middle flex-wrap gap-10">
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
		</div>
	)
}

export default Home;