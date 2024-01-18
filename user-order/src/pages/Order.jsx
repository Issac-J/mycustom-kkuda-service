import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  productState as productInfo,
  ordererState as ordererInfo,
  userState as userInfo,
} from "../recoil/orderInfo";
import styled from "styled-components";
import { BlueButton, body02 } from "../styles/commonStyle";
import { MainHeaderWrapper, MainWrapper } from "../styles/wrapper";
import { MainTitle, MainItemTitle, HeaderTitle } from "../styles/unit";
import Card from "../components/order/Card";
import OrderStepBar from "../components/order/OrderStepBar";
import axios from "axios";
import { insertCommas } from "../utils/numberUtil";

const Order = () => {
  const params = useParams();

  const [productState, setProductState] = useRecoilState(productInfo);
  const ordererState = useRecoilValue(ordererInfo);
  const userState = useRecoilValue(userInfo);

  const [firstStepComplete, setFirstStepComplete] = useState(true);
  const [secondStepComplete, setSecondStepComplete] = useState(
    ordererState ? true : false,
  );
  const [thirdStepComplete, setThirdStepComplete] = useState(
    userState ? true : false,
  );
  const [product, setProduct] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [isError, setIsError] = useState(false);

  const productId = +params.productId;

  useEffect(() => {
    axios
      .get("/dummy/products.json")
      .then((res) => {
        const dataArray = res.data.data;
        const data = dataArray.find((item) => item.id === productId);

        if (!data) {
          throw new Error("Not found product!");
        }

        setProduct(data);

        if (productState) return;

        setProductState({
          name: data.name,
          titleImage: data.titleImage,
          price: data.price,
          vendor: data.vendor,
          rentalMonth: data.rentalPriceList[0].month,
          rentalPrice: data.rentalPriceList[0].price,
        });
      })
      .catch((err) => {
        setIsError(true);
      });
  }, [setProductState]);

  const completeStepHandler = (stepNum) => {
    if (stepNum === 1) {
      setFirstStepComplete(true);
    } else if (stepNum === 2) {
      setSecondStepComplete(true);
    } else if (stepNum === 3) {
      setThirdStepComplete(true);
    }
  };

  return (
    <>
      <MainHeaderWrapper>
        <HeaderTitle>주문서 작성</HeaderTitle>
        <OrderStepBar step={1} />
      </MainHeaderWrapper>
      {isError && <NotFound>해당하는 상품이 없습니다!</NotFound>}
      {!isError && product && (
        <MainWrapper>
          <MainTitle>주문정보</MainTitle>
          <MainItemTitle>{product.name}</MainItemTitle>
          <CardContainer>
            <Card
              stepNum={1}
              title="렌탈기간"
              subTitle={
                productState
                  ? `월 ${insertCommas(productState.rentalPrice)}원 / ${
                      productState.rentalMonth
                    }개월 장기렌탈`
                  : ""
              }
              list={product.rentalPriceList}
              isCompleted={true}
              setIsEditing={setIsEditing}
            />
            <Card
              stepNum={2}
              title="주문자 정보"
              subTitle={
                ordererState
                  ? `${
                      ordererState.ordererName
                    } ${ordererState.ordererPhoneNum.replace(
                      /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
                      "$1-$2-$3",
                    )}`
                  : ""
              }
              disable={!firstStepComplete}
              isCompleted={secondStepComplete}
              onCompleteStep={completeStepHandler}
              setIsEditing={setIsEditing}
            />
            <Card
              stepNum={3}
              title="이용자 정보"
              subTitle={userState ? userState.userAddress : ""}
              disable={!secondStepComplete}
              isCompleted={thirdStepComplete}
              onCompleteStep={completeStepHandler}
              setIsEditing={setIsEditing}
            />
          </CardContainer>

          {thirdStepComplete && !isEditing && (
            <Link to="/user/order-confirm">
              <BlueButton type="submit" width="100%" height="52px">
                등록
              </BlueButton>
            </Link>
          )}
        </MainWrapper>
      )}
    </>
  );
};

const CardContainer = styled.div`
  & > div {
    margin-bottom: 10px;
  }
`;

const NotFound = styled.div`
  ${body02}
  text-align: center;
  margin-top: 50px;
`;

export default Order;
