import { FC } from 'react';

interface blogProps {
	params: {
		slug: string;
	};
}

const blog: FC<blogProps> = ({ params }) => {
	return <h1>Đây là trang abc : {params.slug}</h1>;
};

export default blog;
