import Head from 'next/head';

export default function PagePost({ params }: { params: { postId: string } }) {
	return (
		<>
			<Head>
				<title>{decodeURIComponent(params.postId)}</title>
			</Head>
			<div>Đây là page Post: {decodeURIComponent(params.postId)} </div>
		</>
	);
}
