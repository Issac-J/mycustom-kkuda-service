import React, { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router";
import {
  productState as productInfo,
  ordererState as ordererInfo,
  userState as userInfo,
  couponState as couponInfo,
} from "../recoil/orderInfo";

import { BlueButton, display01 } from "../styles/commonStyle";
import { MainHeaderWrapper, MainWrapper } from "../styles/wrapper";
import { HeaderTitle } from "../styles/unit";
import Thumbnail from "../components/order/Thumbnail";
import OrderStepBar from "../components/order/OrderStepBar";
import OrderInfo from "../components/order/OrderInfo";
import UserInfo from "../components/order/UserInfo";
import CouponCard from "../components/order/CouponCard";
import Receipt from "../components/order/Receipt";
import IniRentalForm from "../components/IniRentalForm";
import arrowIcon from "../images/arrow.svg";
import NotFound from "../components/NotFound";

const tempCouponList = [
  { title: "첫 구매 바로 할인 5,000원", discount: 5000, active: true },
  { title: "[여름맞이] 1만원 할인쿠폰", discount: 10000, active: true },
  { title: "적용안함", discount: 0, active: true },
  { title: "[여름맞이] 1만원 할인쿠폰", discount: 10000, active: false },
];

const OrderConfirm = () => {
  const navigate = useNavigate();
  const productState = useRecoilValue(productInfo);
  const ordererState = useRecoilValue(ordererInfo);
  const userState = useRecoilValue(userInfo);
  const setCouponState = useSetRecoilState(couponInfo);
  const [coupon, setCoupon] = useState(tempCouponList[0]);
  const [isEditing, setIsEditing] = useState(false);

  if (!productState) {
    return <NotFound />;
  }

  const handleSelectItem = (item) => {
    setCoupon(item);
  };

  const handleSaveCoupon = () => {
    setCouponState(coupon);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <MainHeaderWrapper>
        <HeaderTitle>주문서 작성</HeaderTitle>
        <OrderStepBar step={2} />
      </MainHeaderWrapper>
      <OrderConfirmMainWrapper>
        <BackButton src={arrowIcon} alt="뒤로 가기" onClick={handleGoBack} />
        <Title>주문정보</Title>
        <Thumbnail
          src={productState.titleImage}
          title={productState.name}
          price={productState.rentalPrice}
          month={productState.rentalMonth}
        />
        <CardWrapper>
          <CouponCard
            title="쿠폰"
            subTitle={
              tempCouponList.every((coupon) => !coupon.active)
                ? "적용할 수 있는 쿠폰이 없습니다."
                : coupon.title
            }
            disable={tempCouponList.every((coupon) => !coupon.active)}
            isCompleted={true}
            list={tempCouponList}
            onSelectItem={handleSelectItem}
            setIsEditing={setIsEditing}
          />
          <OrderInfo title="주문자 정보" orderInfo={ordererState} />
          <UserInfo title="이용자 정보" userInfo={userState} />
        </CardWrapper>
        <Receipt
          price={productState.rentalPrice}
          coupons={
            tempCouponList.every((coupon) => !coupon.active)
              ? 0
              : coupon.discount
          }
        />
        <IniRentalForm
          productState={productState}
          ordererState={ordererState}
          userState={userState}
          onSaveCoupon={handleSaveCoupon}
          button={
            <BlueButton width="100%" height="52px" disabled={isEditing}>
              결제하기
            </BlueButton>
          }
        />
      </OrderConfirmMainWrapper>
    </>
  );
};

const OrderConfirmMainWrapper = styled(MainWrapper)`
  position: relative;
`;

const BackButton = styled.img`
  position: absolute;
  top: -122px;
  left: 17px;
  height: 8px;
  padding: 5px;
  transform: rotate(90deg);
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Title = styled.h2`
  color: var(--gray-10);
  margin-bottom: 24px;

  ${display01}
`;

const CardWrapper = styled.div`
  margin: 30px 0 20px 0;

  & > div + div {
    margin-top: 10px;

    border: 1px solid var(--gray-03);
    border-radius: 4px;
    padding-bottom: 16px;
  }
`;

export default OrderConfirm;
