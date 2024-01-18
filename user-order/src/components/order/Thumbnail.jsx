import { ThumbnailWrapper } from "../../styles/wrapper";
import { insertCommas } from "../../utils/numberUtil";

const Thumbnail = ({ src, title, price, month, padding }) => {
  return (
    <ThumbnailWrapper padding={padding}>
      <img src={src} alt="상품 이미지" />
      <div className="info-container">
        <p className="title">{title}</p>
        <div>
          <span className="price">월 {insertCommas(price)}원</span>
          <span className="month"> / {month}개월</span>
        </div>
      </div>
    </ThumbnailWrapper>
  );
};

export default Thumbnail;
