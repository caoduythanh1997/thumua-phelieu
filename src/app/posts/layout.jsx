import { Header } from '../Component/Layouts';
import classNames from 'classnames/bind';
import _style from '../globals.module.scss';
const cx = classNames.bind(_style);
export default function layout({ children }) {
	return (
		<>
			<Header Props={''} />
			<div className={cx('main')}>{children}</div>
		</>
	);
}
