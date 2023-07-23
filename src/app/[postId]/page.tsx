import Head from 'next/head';
import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Thu mua phế liệu',
	description: 'ở đây mua phế liệu giá cao',
};
export default function PagePost({ params }: any) {
	return (
		<>
			<Head>
				<title>{decodeURIComponent(params.postId)}</title>
			</Head>
			<div>Đây là page Post: {decodeURIComponent(params.postId)} </div>
		</>
	);
}
