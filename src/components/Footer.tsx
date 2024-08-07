import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { RiGooglePlayFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { SlArrowDown } from "react-icons/sl";

export default function Footer() {
	return (
		<footer>
			<div className="box1">
				<ul>
					<li>
						<Link to="/fleamarket">중고거래 </Link>
					</li>
					<li>
						<Link to="/nearbyStores">동네업체 </Link>
					</li>
					<li>
						<Link to="/jobs">알바 </Link>
					</li>
					<li>
						<Link to="/realty">부동산 </Link>
					</li>
					<li>
						<Link to="/car">중고차 직거래 </Link>
					</li>
				</ul>
				<ul>
					<li>당근비즈니스</li>
					<li>채팅하기</li>
				</ul>
				<ul>
					<li>자주 묻는 질문</li>
					<li>회사 소개</li>
					<li>인재 채용</li>
				</ul>
			</div>

			<div className="box2">
				<p>당근 앱 다운로드</p>
				<button type="button" className="apple">
					<FaApple size="20" /> App Store
				</button>
				<button type="button" className="google">
					<RiGooglePlayFill size="20" /> Google Play
				</button>
			</div>

			<div className="box3">
				<div className="left">
					<div>
						<p>
							<span>
								<b>대표</b>김용현, 황도연
							</span>
							<span className="line">
								<b>사업자번호</b> 123-45-67890
							</span>
						</p>
						<p>
							<b>직업정보제공사업 신고번호</b> J10002012345
						</p>
						<p>
							<b>통신판매업 신고번호</b> 2021-서울서초-2875
						</p>
						<p>
							<b>주소</b> 서울특별시 구로구 디지털로300, 10층 (당근서비스)
						</p>
						<p>
							<span>
								<b>전화</b> 1111-9999
							</span>
							<span className="line">
								<b>고객문의</b> hireh1214@gmail.com
							</span>
						</p>
					</div>

					<ul>
						<li>제휴 문의</li>
						<li>광고 문의</li>
						<li>PR 문의</li>
						<li>IR 문의</li>
					</ul>

					<ul>
						<li>이용약관</li>
						<li>개인정보처리방침</li>
						<li>운영정책</li>
						<li>위치기반서비스 이용약관</li>
						<li>이용자보호 비전과 계획</li>
						<li>청소년보호정책</li>
					</ul>
				</div>

				<div className="right">
					<ul>
						<FaFacebook size="22" color="868b94" />
						<FaInstagram size="22" color="868b94" />
						<FaYoutube size="22" color="868b94" />
						{/* 깃허브 버튼은 반짝반짝 빛나서 시선 끌게 하기 */}
						<FaSquareGithub size="22" color="868b94" />
					</ul>
					<div className="select">
						<GrLanguage size="14" color="868b94" />
						<select id="lang">
							<option value="kr" selected>
								한국
							</option>
							<option value="en">미국</option>
							<option value="jp">일본</option>
						</select>
						<SlArrowDown size="14" color="868b94" />
					</div>
				</div>
			</div>
		</footer>
	);
}
