import Layout from "../components/Layout";
import CarItem from "../supabase/item/CarItem";
import MiddleBox from "../components/MiddleBox";

export default function Car() {
	return (
		<Layout>
			<section className="top_sec car">
				<div>
					<h2>
						딜러 수수료 없는
						<br />
						중고차 직거래
					</h2>
					<p>
						딜러 없이 믿고 살 수 있는 중고차,
						<br />
						당근에서 직거래해보세요.
					</p>
					<button type="button">내 차 판매하기</button>
				</div>
			</section>
			<section className="main_sec car">
				<h2>인기 중고차</h2>
				<CarItem />
				<MiddleBox
					text1="딜러 수수료 없는 중고차 직거래"
					text2="당근에서 바로 찾아보세요!"
					btnText="앱 다운로드 하기"
				/>
				<CarItem />
			</section>
		</Layout>
	);
}
