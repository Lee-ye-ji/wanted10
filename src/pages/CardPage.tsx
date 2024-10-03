import React from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Card from "../components/card/Card";
import Loading from "../components/loading/Loading";
import "./CardPage.css";

const CardPage = () => {
  const { data, isEnd, loadingRef, error } = useInfiniteScroll();
  return (
    <div className="page">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Card item={item} />
        </React.Fragment>
      ))}
      {!isEnd && (
        <div ref={loadingRef}>
          <Loading />
        </div>
      )}
      {/* 더 로드할 데이터가 있을 때 */}
      {error && <div>{error}</div>} {/* 에러 메시지 표시 */}
    </div>
  );
};

export default CardPage;
