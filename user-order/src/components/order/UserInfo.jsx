import React from "react";
import { InfoStyle, InfoTitle, Content } from "../../styles/unit";

const OrderInfo = ({ title, userInfo }) => {
  return (
    <>
      <InfoStyle>
        <InfoTitle>{title}</InfoTitle>
        <Content>
          <label>이름</label>
          <span>{userInfo.userName}</span>
        </Content>

        <Content>
          <label>연락처</label>
          <span>{userInfo.userPhoneNum}</span>
        </Content>

        <Content>
          <label>이메일</label>
          <span>{userInfo.userEmail}</span>
        </Content>

        <Content>
          <label>주소</label>
          <span>
            {userInfo.userAddress} {userInfo.userDetailAddress}
          </span>
        </Content>

        <Content>
          <label>요청사항</label>
          <span>{userInfo.userMemo}</span>
        </Content>
      </InfoStyle>
    </>
  );
};

export default OrderInfo;
