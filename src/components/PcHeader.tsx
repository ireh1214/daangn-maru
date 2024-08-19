import { Link, useLocation } from "react-router-dom";

export default function PcHeader() {
	const location = useLocation();

	const getClass = (path: string) => {
		return location.pathname === path ? "on" : "";
	};

	return (
		<header>
			<nav>
				<Link to="/">
					{/* biome-ignore lint/a11y/useHeadingContent: <explanation> */}
					<h1 className="logo" />
				</Link>

				<ul>
					<li className={getClass("/fleamarket")}>
						<Link to="/fleamarket">중고거래 </Link>
					</li>
					<li className={getClass("/nearbyStores")}>
						<Link to="/nearbyStores">동네업체 </Link>
					</li>
					<li className={getClass("/jobs")}>
						<Link to="/jobs">알바 </Link>
					</li>
					<li className={getClass("/realty")}>
						<Link to="/realty">부동산 </Link>
					</li>
					<li className={getClass("/car")}>
						<Link to="/car">중고차 직거래 </Link>
					</li>
				</ul>
			</nav>

			<div className="right">
				<input type="text" placeholder="물품이나 동네를 검색해보세요" />
				<button type="button">채팅하기</button>
			</div>
		</header>
	);
}
