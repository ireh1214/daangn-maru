// ItemBox.tsx

import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function ItemBox() {
	const [data, setData] = useState<string | null>(null);

	useEffect(() => {
		// 스토리지에서 데이터를 가져오는 함수
		const fetchData = async () => {
			const { data, error } = await supabase.storage
				.from("your-bucket-name") // 여기에 버킷 이름을 입력하세요
				.download("path/to/your/file.txt"); // 여기에 파일 경로를 입력하세요

			if (!error && data) {
				const text = await data.text(); // 파일 데이터를 읽어 문자열로 변환
				setData(text); // 데이터를 상태에 저장
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Item Data</h1>
			<div>{data}</div>
		</div>
	);
}
