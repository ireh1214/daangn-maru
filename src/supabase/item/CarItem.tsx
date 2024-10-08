import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Loading from "../../components/Loading"

// 데이터 타입 정의
// uuid 타입은 string, bigint는 number
interface Item {
	id: number;
	image_url: string;
	title: string;
	descrption: string;
	since: string;
	price: string;
}

export default function CarItem() {
	const [items, setItems] = useState<Item[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchItems = async () => {
			const { data, error } = await supabase
				.from("items_c") // 테이블 이름 입력
				.select("*"); // 모든 컬럼 선택

			if (error) {
				console.error("Error fetching data:", error.message); // 오류 메시지 출력
				setError(error.message); // 오류 메시지 설정
			} else {
				console.log("Fetched data:", data); // 가져온 데이터 출력
				setItems(data as Item[]); // 데이터를 상태에 저장
			}
			setLoading(false);
		};

		fetchItems();
	}, []);

	if (loading) return <Loading />;
	if (error) return <div>Error: {error}</div>;

	return (
		<>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<img src={item.image_url} alt="" />
						<div>
							<h5>{item.title}</h5>
							<p>{item.since}</p>
							<p>{item.price}</p>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
