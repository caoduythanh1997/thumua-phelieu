import Head from 'next/head';
import { useRouter } from 'next/navigation';

async function GetData(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const data = await res.json();
	return data;
}

export default async function PagePost({ params, searchParams }) {
	const data = await GetData(searchParams.id);
	console.log(data);
	return (
		<>
			<div>Đây là page Post: {decodeURIComponent(params.postId)}</div>
		</>
	);
}

export async function generateMetadata({ params, searchParams }) {
	return {
		title: params.postId,
	};
}
