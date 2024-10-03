import { useEffect, useRef, useState } from "react";
import { MockData } from "../types/mockData"; // MockData 타입 가져오기
import { getMockData } from "../utils/getMockData"; // 데이터 로드 함수 가져오기

const useInfiniteScroll = () => {
  const [data, setData] = useState<MockData[]>([]); // 렌더링될 데이터 배열
  const [pageNum, setPageNum] = useState<number>(1); // 현재 페이지 번호
  const [isEnd, setIsEnd] = useState<boolean>(false); // 더 많은 데이터가 있는지 여부
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const loadingRef = useRef<HTMLDivElement | null>(null); // 로딩 요소를 참조할 ref

  /**
   * @desc 데이터 로드 함수
   */
  const loadMoreData = async () => {
    if (isEnd) return; // 더 이상 데이터가 없으면 함수 종료
    setError(null); // 에러 초기화
    try {
      // 페이지 번호에 해당하는 데이터를 로드
      const result = await getMockData(pageNum);
      // 이전 데이터에 새로운 데이터를 추가
      setData((prevData) => [...prevData, ...result.datas]);
      // 더 이상 데이터가 없는지 상태 업데이트
      setIsEnd(result.isEnd);
      // 페이지 번호 증가
      setPageNum((prevPageNum) => prevPageNum + 1);
    } catch (err) {
      // 데이터 로드 중 오류 발생 시 에러 메시지 설정
      setError("데이터 로드 중 오류가 발생했습니다.");
    } finally {
    }
  };

  useEffect(() => {
    loadMoreData(); // 컴포넌트가 마운트될 때 초기 데이터 로드

    // IntersectionObserver를 생성하여 스크롤 시 데이터 로드
    const observer = new IntersectionObserver(
      (entries) => {
        // 로딩 요소가 뷰포트에 들어오면 더 많은 데이터 로드
        if (entries[0].isIntersecting) {
          loadMoreData();
        }
      },
      { threshold: 1.0 } // 요소가 100% 보일 때 호출
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current); // 로딩 요소를 관찰
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current); // 컴포넌트 언마운트 시 관찰 해제
      }
    };
  }, [loadingRef, isEnd]); // loadingRef와 isEnd가 변경될 때마다 useEffect 실행

  return { data, isEnd, loadingRef, error };
};

export default useInfiniteScroll;
