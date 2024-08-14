import Layout from "../components/Layout";
import { RiGooglePlayFill } from "react-icons/ri";
import { FaApple } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      <div className="home_wrap">
        <section>
          <div>
            <h2>
              당신 근처의 <br />
              지역 생활 커뮤니티
            </h2>
            <p>
              동네라서 가능한 모든 것 <br /> 당근에서 가까운 이웃과 함께해요.
            </p>

            <div>
              <button type="button" className="google">
                <RiGooglePlayFill size="16" /> Google Play
              </button>
              <button type="button" className="apple">
                <FaApple size="16" /> App Store
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="sec_container">
            <div className="main_img1" />
            <div className="text_box">
              <p>중고거래</p>
              <em>
                믿을만한 <br /> 이웃 간 중고거래{" "}
              </em>
              <p>
                동네 주민들과 가깝고 따뜻한 거래를
                <br />
                지금 경험해보세요.
              </p>

              <div>
                <button type="button">인기매물 보기</button>
                <button type="button">믿을 수 있는 중고거래</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="sec_container">
            <div className="text_box">
              <p>동네생활</p>
              <em>
                이웃만 아는
                <br />
                동네 정보와 이야기
              </em>
              <p>
                우리동네의 다양한 정보와 이야기를 <br />
                공감과 댓글로 나누어요.
              </p>

              <div>
                <ul>
                  <li>
                    <h6>동네모임</h6>
                    <p>
                      근처 이웃들과 동네 <br />
                      이야기를 해보세요.
                    </p>
                  </li>
                  <li>
                    <h6>동네질문</h6>
                    <p>
                      궁금한 게 있을 땐<br />
                      이웃에 물어보세요.
                    </p>
                  </li>
                  <li>
                    <h6>동네분실센터</h6>
                    <p>
                      무언가를 잃어버렸다면 <br />
                      글을 올려보세요.{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main_img2" />
          </div>
        </section>
        <section>
          <div className="sec_container">
            <div className="main_img3" />
            <div className="text_box">
              <p>알바</p>
              <em>
                걸어서 10분! <br /> 동네 알바 구하기
              </em>
              <p>
                당근하듯 쉽고, 편하게
                <br />
                당근 알바로 동네 알바를 구할 수 있어요.
              </p>

              <button type="button">내 근처 알바 보기</button>
            </div>
          </div>
        </section>
        <section>
          <div className="sec_container">
            <div className="text_box">
              <p>동네업체</p>
              <em>
                내 근처에서 찾는
                <br />
                동네업체
              </em>
              <p>
                이웃들의 추천 후기를 확인하고 <br />
                동네 곳곳의 업체들을 찾을 수 있어요.
              </p>
              <button type="button">당근 동네업체 보기</button>
            </div>
            <div className="main_img4" />
          </div>
        </section>
      </div>
    </Layout>
  );
}
