import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

// 데이터 타입 정의
interface Item {
	id_: string; // uuid 타입은 string
	image_url: string;
	title: string;
	description: string;
	location: string;
	price: number; // bigint는 number
}

export default function ItemBox() {
	const [items, setItems] = useState<Item[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchItems = async () => {
			const { data, error } = await supabase
				.from("items") // 테이블 이름 입력
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
		<div>
			<h1>Items List</h1>
			<ul>
				{items.map((item) => (
					<li key={item.id_}>
						{/* id는 아직 없다! */}
						<h2>{item.title}</h2>
						<p>Price: {item.price} 원</p>
						<p>Location: {item.location}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
