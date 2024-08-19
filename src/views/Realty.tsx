import Layout from "../components/Layout";
import RealtyItem from "../supabase/item/RealtyItem";
import MiddleBox from "../components/MiddleBox";

export default function Realty() {
	return (
		<Layout>
			<section className="top_sec realty">
				<div>
					<h2>
						간편하고 따뜻한
						<br />
						당근 부동산
					</h2>
					<p>
						이웃이 살던 집, 당근에서
						<br />
						편하게 거래해보세요.
					</p>
					<button type="button">매물 올리기</button>
				</div>
			</section>
			<section className="main_sec realty">
				<h2>인기 부동산 게시글</h2>
				<RealtyItem />
				<MiddleBox
					text1="쉿! 동네 이웃만 알아요. 👀"
					text2="숨은 부동산 매물, 당근에서 바로 찾아보세요!"
					btnText="앱 다운로드 하기"
				/>
				<RealtyItem />
			</section>
		</Layout>
	);
}
