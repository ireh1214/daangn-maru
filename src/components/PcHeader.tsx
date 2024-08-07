import { Link } from "react-router-dom";

export default function PcHeader() {
	return (
		<header>
			<nav>
				<Link to="/">
					{/* biome-ignore lint/a11y/useHeadingContent: <explanation> */}
					<h1 className="logo" />
				</Link>

				<ul>
					<li>
						<Link to="/fleamarket">중고거래 </Link>
					</li>
					<li>
						<Link to="/nearbyStores">동네업체 </Link>
					</li>
					<li>
						<Link to="/jobs">알바 </Link>
					</li>
					<li>
						<Link to="/realty">부동산 </Link>
					</li>
					<li>
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
