import Layout from "../components/Layout";
import JobsItem from "../supabase/item/JobsItem";
import MiddleBox from "../components/MiddleBox";

export default function Jobs() {
	return (
		<Layout>
			<section className="top_sec jobs">
				<div>
					<h2>
						우리 동네에서 찾는
						<br />
						당근알바
					</h2>
					<p>
						걸어서 10분 거리의
						<br />
						동네 알바들 여기 다 있어요.
					</p>
					<button type="button">공고 올리기</button>
				</div>
			</section>
			<section className="main_sec jobs">
				<h2>인기 중고차</h2>
				<JobsItem />
				<MiddleBox
					text1="대규모 채용이 필요하다면"
					text2="당근알바 기업용 서비스에 대해 알아보세요!"
					btnText="더 알아보기"
				/>
				<JobsItem />
			</section>
		</Layout>
	);
}
