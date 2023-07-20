import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Axios from 'axios';

const Blog = () => {
	let { pID } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [Pdeatils, setPdeatils] = useState([]);
	useEffect(()=>{
		console.log('useEffect called');
		getData();
		//setPdeatils('Hetal');
		
	}, []);

	const getData =  () => {
		console.log('getdata called');
		let url = 'https://chandanbrass.com/wp/wp-json/wp/v2/posts/' + pID  + '?_embed';
		Axios.get(url).then((res)=>{
			setPdeatils(res.data);
			setIsLoading(false);
			console.log('inside', res.data)
		}); 
			
	}

	if(isLoading) {
		return <div className='container'>Loading.....</div>
	}
	
	console.log(Pdeatils);
	return (
		<>
		<div className='container'>
			<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
				<img
					src={Pdeatils._embedded['wp:featuredmedia'][0].source_url}
					alt={Pdeatils.title.rendered}
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
			<h2 className="py-10 pl-10 pr-10 text-lg font-bold text-center">{Pdeatils.title.rendered}</h2>
			<div className="space-y-12 py-10 pl-10 pr-10">
				<div className="border-b border-gray-900/10 pb-12">
						<p dangerouslySetInnerHTML={{__html: Pdeatils.content.rendered}}></p>
				</div>
			</div>
			<div class="px-3 py-2">
			<span className='author text-gray-700 p-10 pl-10 pr-10'>Author: {Pdeatils._embedded['author'][0].name}</span>
			</div>
		</div>
		</>
	)
}

export default Blog;