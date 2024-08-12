import Layout from "../components/Layout";
import ItemBox from "../supabase/item/FleamarketItem";

export default function Fleamarket() {
	return (
		<Layout>
			<section className="top_sec fleamarket">
				<h2>
					믿을만한
					<br />
					이웃 간 중고거래
				</h2>
				<p>
					동네 주민들과 가깝고 따뜻한 거래를
					<br />
					지금 경험해보세요.
				</p>
			</section>
			<section className="main_sec fleamarket">
				<h2>중고거래 인기매물</h2>
				<ItemBox />
			</section>
		</Layout>
	);
}
