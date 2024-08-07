import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";

export default function MoHeader() {
	const [isNavVisible, setIsNavVisible] = useState(false);

	const toggleNav = () => {
		setIsNavVisible(!isNavVisible);
	};

	return (
		<header className="mo">
			<Link to="/">
				{/* biome-ignore lint/a11y/useHeadingContent: <explanation> */}
				<h1 className="logo" />
			</Link>
			<IoSearchOutline size="24" color="#000" />
			<RxHamburgerMenu
				size="24"
				color="#000"
				onClick={toggleNav}
				style={{ display: isNavVisible ? "none" : "block" }}
			/>
			<IoCloseOutline
				size="24"
				color="#000"
				onClick={toggleNav}
				style={{ display: isNavVisible ? "block" : "none" }}
			/>

			<nav style={{ display: isNavVisible ? "block" : "none" }}>
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

			<div
				className="bg"
				style={{ display: isNavVisible ? "block" : "none" }}
			/>
		</header>
	);
}
