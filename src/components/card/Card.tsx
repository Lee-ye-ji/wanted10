import { MockData } from "../../types/mockData";
import { formatDate } from "../../utils/getMockData";
import "./Card.css";

interface CardProps {
  item: MockData; // MockData 타입의 item을 props로 받습니다.
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="card">
      <ul>
        <li>
          <span className="name">상품 번호</span>
          <span className="value">{item.productId}</span>
        </li>
        <li>
          <span className="name">상품명</span>
          <span className="value">{item.productName}</span>
        </li>
        <li>
          <span className="name">가격</span>
          <span className="value">{item.price}원</span>
        </li>
        <li>
          <span className="name">구매일</span>
          <span className="value">{formatDate(item.boughtDate)}</span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
