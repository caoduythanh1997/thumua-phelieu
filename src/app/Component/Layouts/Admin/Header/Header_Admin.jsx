import style from './header_admin.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(style);
export default function Header_Admin({ props }) {
	return (
		<div className={cx('admin')}>
			<div className={cx('headerAdmin')}>
				<div className={cx('headerAdmin_wrapper')}>
					<div className={cx('headerAdmin_wrapper-logo')}></div>
					<div className={cx('headerAdmin_wrapper-button')}>
						<div className={cx('btn-login')}>
							<Link href="/admin/dang-nhap">
								<p>Đăng nhập</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={cx('headerAdmin_content')}>{props.children}</div>
		</div>
	);
}
