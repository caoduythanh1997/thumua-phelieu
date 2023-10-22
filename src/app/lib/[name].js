export const getStaticPaths = async () => {
	return {
		paths: [
			{
				params: {
					name: 'next.js',
				},
			}, // See the "paths" section below
		],
		fallback: false, // false or "blocking"
	};
};
export const getStaticProps = async () => {
	const res = await fetch('https://api.github.com/repos/vercel/next.js');
	const repo = await res.json();
	return { props: { repo } };
};

export default function Page({ repo }) {
	return repo.stargazers_count;
}
