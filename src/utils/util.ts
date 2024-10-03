import { MOCK_DATA } from "../datas/mockData"; // Mock 데이터 가져오기
import { GetMockDataResult, MockData } from "../types/mockData"; // 타입 정의 가져오기

const PER_PAGE = 10; // 한 페이지에 표시할 데이터 수

/**
 * @desc 지정된 페이지 번호에 따라 데이터를 비동기적으로 가져오는 함수
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

/**
 * @desc 주어진 날짜 문자열을 포맷하여 반환하는 함수
 * @param dateString - 포맷할 날짜 문자열
 * @returns 포맷된 날짜 문자열
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString); // 주어진 문자열을 Date 객체로 변환

  // 요일 배열
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const year = date.getFullYear(); // 연도
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월 (0부터 시작하므로 +1)
  const day = String(date.getDate()).padStart(2, "0"); // 일
  const weekday = weekdays[date.getDay()]; // 요일
  const hours = String(date.getHours()).padStart(2, "0"); // 시
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 분
  const seconds = String(date.getSeconds()).padStart(2, "0"); // 초

  // 포맷된 문자열 반환 (MM/DD/YYYY (요일) HH:MM:SS)
  return `${month}/${day}/${year} (${weekday}) ${hours}:${minutes}:${seconds}`;
};

/**
 * @desc 주어진 MockData 배열에서 총 가격을 계산하는 함수
 * @param products - 가격을 계산할 MockData 배열
 * @returns 총 가격 (달러 형식으로 포맷됨)
 */
export const calculateTotalPrice = (products: MockData[]): string => {
  // reduce 메서드를 사용하여 모든 제품의 가격을 합산
  const total = products.reduce((total, product) => total + product.price, 0);

  // 달러 형식으로 포맷하여 반환
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(total);
};

/**
 * @desc 주어진 가격을 포맷하여 반환하는 함수
 * @param price 가격
 * @returns 가격 (달러 형식으로 포맷됨)
 */
export const formatPrice = (price: number) => {
  // 달러 형식으로 포맷하여 반환
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
