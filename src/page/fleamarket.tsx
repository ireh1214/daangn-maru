import Layout from "../components/Layout";
import ItemBox from "../supabase/ItemBox";

export default function Fleamarket() {
	return (
		<Layout>
			<section>
				<h2>중고거래 인기매물</h2>
				<div>여기에 데이터 넣기</div>
				<ItemBox />
			</section>
		</Layout>
	);
}
