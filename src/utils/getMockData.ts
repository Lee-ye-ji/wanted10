import { MOCK_DATA } from "../datas/mockData";
import { GetMockDataResult, MockData } from "../types/mockData";

const PER_PAGE = 10;

/**
 * 지정된 페이지 번호에 따라 데이터를 비동기적으로 가져오는 함수
 *
 * @param pageNum - 불러올 페이지 번호 (1부터 시작)
 * @returns Promise 객체로 { datas, isEnd }를 반환
 *          - datas: 해당 페이지에 해당하는 MockData 배열
 *          - isEnd: 데이터의 끝에 도달했는지 여부를 나타내는 boolean 값
 */
export const getMockData = (pageNum: number) => {
  // Promise 객체 반환 (비동기 처리)
  return new Promise<GetMockDataResult>((resolve) => {
    // setTimeout을 사용해 1.5초 후에 데이터를 가져오도록 설정 (비동기 요청처럼 처리)
    setTimeout(() => {
      // 페이지당 데이터를 가져옴. slice()로 데이터를 자르고, PER_PAGE에 기반하여 해당 페이지의 데이터를 추출
      const datas: MockData[] = MOCK_DATA.slice(
        PER_PAGE * pageNum, // 현재 페이지의 시작 인덱스
        PER_PAGE * (pageNum + 1) // 현재 페이지의 끝 인덱스 (다음 페이지 전까지)
      );

      // 현재 페이지가 마지막인지 확인. 데이터의 끝에 도달했는지 여부를 체크
      const isEnd = PER_PAGE * (pageNum + 1) >= MOCK_DATA.length;

      // datas와 isEnd 값을 resolve를 통해 반환
      resolve({ datas, isEnd });
    }, 1500); // 1.5초의 지연시간 설정
  });
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString); // 주어진 문자열을 Date 객체로 변환

  // 요일 배열
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const year = date.getFullYear(); // 연도
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월 (0부터 시작하므로 +1)
  const day = String(date.getDate()).padStart(2, "0"); // 일
  const weekday = weekdays[date.getDay()]; // 요일
  const hours = String(date.getHours()).padStart(2, "0"); // 시
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 분
  const seconds = String(date.getSeconds()).padStart(2, "0"); // 초

  // 포맷된 문자열 반환
  return `${year}.${month}.${day}(${weekday}) ${hours}시 ${minutes}분 ${seconds}초`;
};
