import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Loading from "../../components/Loading";

interface Item {
  id_: number;
  image_url: string;
  title: string;
  descrption: string;
  location: string;
  s_title: string; 
}

export default function NearItem() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase
        .from("items_d") // 테이블 이름 입력
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
      <div className="hash_box">
        <button type="button">음식</button>
        <button type="button">여행</button>
        <button type="button">가구</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id_}>
            <img src={item.image_url} alt="" />
            <div>
              <h5>
                <span>{item.title}</span> <span>{item.location}</span>
              </h5>
              <p>{item.descrption}</p>
              <p> 후기 0 · 단골 0 · {item.s_title}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
