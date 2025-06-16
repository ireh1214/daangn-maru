import { atom } from "recoil";

export const searchQueryState = atom({
  key: "searchQueryState", // 고유한 키를 지정
  default: "", // 검색어의 초기값은 빈 문자열로 한다!
});
