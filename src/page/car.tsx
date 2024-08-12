import Layout from "../components/Layout";
import CarItem from "../supabase/item/CarItem";

export default function Car() {
	return (
		<Layout>
			<section className="top_sec car">
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
			</section>
			<section className="main_sec car">
				<h2>인기 중고차</h2>
				<CarItem />
				<div className="middle_box">
					<p>
						딜러 수수료 없는 중고차 직거래 <br />
						당근에서 바로 찾아보세요!
					</p>
					<button type="button">앱 다운로드 하기</button>
				</div>
				<CarItem />
			</section>
		</Layout>
	);
}
