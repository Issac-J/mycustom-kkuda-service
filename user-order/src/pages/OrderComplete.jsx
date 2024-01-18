import React from "react";
import { useRecoilValue } from "recoil";
import {
  productState as productInfo,
  ordererState as ordererInfo,
  userState as userInfo,
  couponState as couponInfo,
} from "../recoil/orderInfo";

import { MainHeaderWrapper, MainWrapper, SubWrapper } from "../styles/wrapper";
import { HeaderTitle, SubTitle } from "../styles/unit";
import { BlueButton } from "../styles/commonStyle";
import OrderStepBar from "../components/order/OrderStepBar";
import OrderInfo from "../components/order/OrderInfo";
import UserInfo from "../components/order/UserInfo";
import Thumbnail from "../components/order/Thumbnail";
import Receipt from "../components/order/Receipt";
import NotFound from "../components/NotFound";

const OrderComplete = () => {
  const productState = useRecoilValue(productInfo);
  const ordererState = useRecoilValue(ordererInfo);
  const userState = useRecoilValue(userInfo);
  const couponState = useRecoilValue(couponInfo);

  if (!productState) {
    return <NotFound />;
  }

  return (
    <div>
      <MainHeaderWrapper>
        <HeaderTitle>주문서 작성</HeaderTitle>
        <OrderStepBar step={3} />
      </MainHeaderWrapper>

      <MainWrapper>
        <SubTitle>결제 완료</SubTitle>
        <SubWrapper>
          <Thumbnail
            src={productState.titleImage}
            title={productState.name}
            price={productState.rentalPrice}
            month={productState.rentalMonth}
            padding="16px 20px 30px 20px"
          />
          <OrderInfo title="주문자 정보" orderInfo={ordererState} />
          <UserInfo title="이용자 정보" userInfo={userState} />
        </SubWrapper>
        <Receipt
          price={productState.rentalPrice}
          coupons={couponState.discount}
        />
        <BlueButton width="100%" height="52px">
          확인
        </BlueButton>
      </MainWrapper>
    </div>
  );
};

export default OrderComplete;
