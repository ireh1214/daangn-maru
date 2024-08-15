import Layout from "../components/Layout";
import NearItem from "../supabase/item/NearItem";

export default function NearbyStores() {
  return (
    <Layout>
      <section className="top_sec near">
        <div>
          <h2>
            동네 이웃들이
            <br />
            자주 가는 동네 업체
          </h2>
          <p>
            우리 동네 사람들이
            <br />
            이용하는 업체를 찾아보세요.
          </p>
        </div>
      </section>
      <section className="main_sec near">
        <h2>인기 부동산 게시글</h2>
        <NearItem />
      </section>
    </Layout>
  );
}
