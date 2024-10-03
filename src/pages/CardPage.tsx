import React from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Card from "../components/card/Card";
import Loading from "../components/loading/Loading";
import "./CardPage.css";
import { calculateTotalPrice } from "../utils/util";

const CardPage = () => {
  const { data, isEnd, loadingRef, error } = useInfiniteScroll();
  return (
    <div className="page">
      <div className="fixed-header">
        <div className="header-box">
          <div>
            <span className="header-name">상품 리스트 개수</span>
            <span className="header-value">{data.length}개</span>
          </div>
          <div>
            <span className="header-name">총 금액</span>
            <span className="header-value">{calculateTotalPrice(data)}</span>
          </div>
        </div>
      </div>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Card item={item} />
        </React.Fragment>
      ))}
      <div ref={loadingRef}>{!isEnd && <Loading />}</div>
      {/* 더 로드할 데이터가 있을 때 */}
      {error && <div>{error}</div>} {/* 에러 메시지 표시 */}
    </div>
  );
};

export default CardPage;
