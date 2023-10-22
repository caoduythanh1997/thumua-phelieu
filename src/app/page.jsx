import './globals.css';
import { Header } from './Component/Layouts';
import classNames from 'classnames/bind';
import _style from './globals.module.scss';

const cx = classNames.bind(_style);
export default function Home() {
	return (
		<>
			<Header Props={''} />
			<div className={cx('main')}>
				<p>Trang Chủ</p>
			</div>
		</>
	);
}
