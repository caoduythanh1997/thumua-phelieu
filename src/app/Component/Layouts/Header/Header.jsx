import Link from 'next/link';
import classNames from 'classnames/bind';
import _style from './header.module.scss';
import { toSlug } from '../../Common/common';

const cx = classNames.bind(_style);
async function getData() {
	const getPost = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await getPost.json();
	return data;
}

const category = [
	{
		title: 'Thương ngây',
		id: '01',
	},
	{
		title: 'Thương Hâm',
		id: '02',
	},
	{
		title: 'Thương não',
		id: '03',
	},
	{
		title: 'mua phế liệu điện tử',
		id: '04',
	},
	{
		title: 'mua phế liệu niken',
		id: '05',
	},
];
export default async function Header({ Props }) {
	const dt = await getData();
	return (
		<header className={cx('header_bar')}>
			<div className={cx('title_bar')}>
				<div className={cx('wrapper')}>
					<div className={cx('contact')}>
						<p className={cx('contact__label_text')}>liên hệ hỗ trợ: 099999999999</p>
					</div>
				</div>
			</div>
			<div className={cx('logo')}>
				<div className={cx('logo_wrapper')}>
					<div className={cx('content_logo')}>
						<div className={cx('content_logo-icon')}>
							<p>
								<a href="/">Thu mua phế liệu</a>
							</p>
						</div>
						<div className={cx('content_logo-info')}>
							<ul className={cx('infosite')}>
								<li className={cx('infosite_btnActionLink')}>
									<Link href="/">Dịch vụ</Link>
								</li>
								<li className={cx('infosite_btnActionLink')}>
									<Link href="/">Giới thiệu</Link>
								</li>
								<li className={cx('infosite_btnActionLink')}>
									<Link href="/">Bảng giá</Link>
								</li>
								<li className={cx('infosite_btnActionLink')}>
									<Link href="/">Liên hệ</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className={cx('category')}>
				<ul className={cx('category_wrapper')}>
					{category.map((content, index) => (
						<li className={cx('categoryItem')} key={index}>
							<Link
								href={{
									pathname: `/posts/${toSlug(content.title)}`,
									query: {
										id: content.id,
									},
								}}
							>
								{content.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
