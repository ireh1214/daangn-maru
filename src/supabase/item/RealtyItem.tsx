import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

// 데이터 타입 정의
interface Item {
	id: string; 
	image_url: string;
	title: string;
	descrption: string;
	location: string;
	price: number; 
}

export default function RealtyItem() {
	const [items, setItems] = useState<Item[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchItems = async () => {
			const { data, error } = await supabase
				.from("items_r") // 테이블 이름 입력
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

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<img src={item.image_url} alt="" />
						<div>
							<h5>{item.title}</h5>
							<p>{item.location}</p>
							<p>{item.price}</p>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
