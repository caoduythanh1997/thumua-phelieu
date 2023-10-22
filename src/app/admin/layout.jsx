import { Roboto } from 'next/font/google';
const inter = Roboto({ subsets: ['vietnamese'], weight: '700' });
import { Header_Admin } from '../Component/Layouts';
import style from './admin.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
export const metadata = {
	title: 'Đây là trang admin',
	description: 'ở đây mua phế liệu giá cao',
};

export default function RootLayout({ children }) {
	return <Header_Admin props={{ children }} />;
}
