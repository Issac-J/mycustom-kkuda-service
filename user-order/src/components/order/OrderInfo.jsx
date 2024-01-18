import React from "react";
import { InfoStyle, InfoTitle, Content } from "../../styles/unit";

const OrderInfo = ({ title, orderInfo }) => {
  return (
    <InfoStyle>
      <InfoTitle>{title}</InfoTitle>
      <Content>
        <label>이름</label>
        <span>{orderInfo.ordererName}</span>
      </Content>

      <Content>
        <label>연락처</label>
        <span>{orderInfo.ordererPhoneNum}</span>
      </Content>

      <Content>
        <label>이메일</label>
        <span>{orderInfo.ordererEmail}</span>
      </Content>
    </InfoStyle>
  );
};

export default OrderInfo;
