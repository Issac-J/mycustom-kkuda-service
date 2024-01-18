import { memo } from "react";

import { BlueCircle, GrayCircle } from "../../styles/commonStyle";
import { CardSubTitle, CardTitle } from "../../styles/unit";
import {
  CardWrapper,
  CardHeaderWrapper,
  CardInfoWrapper,
  CardButtonWrapper,
  CardContentsWrapper,
} from "../../styles/wrapper";
import checkIncon from "../../images/check-white.svg";
import checkGrayIncon from "../../images/check-gray.svg";
import arrowIcon from "../../images/arrow.svg";
import arrowGrayIcon from "../../images/arrow-gray.svg";
import CouponList from "./CouponList";
import styled from "styled-components";
import useAccordion from "../../hooks/useAccordion";

const CouponCard = ({
  title,
  subTitle,
  list,
  disable = false,
  isCompleted = false,
  onSelectItem,
  setIsEditing,
}) => {
  const { parentRef, childRef, isCollapse, handleButtonClick } =
    useAccordion(setIsEditing);

  const handleSelectItem = (item) => {
    handleButtonClick();
    onSelectItem(item);
  };

  return (
    <CouponCardWrapper disable={disable}>
      <CardHeaderWrapper>
        <CardInfoWrapper isCompleted={isCompleted}>
          {isCompleted && !isCollapse && (
            <BlueCircle>
              <img src={checkIncon} alt="체크" />
            </BlueCircle>
          )}
          {isCollapse && (
            <GrayCircle>
              <img src={checkGrayIncon} alt="체크" />
            </GrayCircle>
          )}
          <div>
            <CardTitle disable={disable}>{title}</CardTitle>
            <CardSubTitle disable={disable}>{subTitle}</CardSubTitle>
          </div>
        </CardInfoWrapper>
        <CardButtonWrapper>
          <ArrowImgButton
            src={disable ? arrowGrayIcon : arrowIcon}
            alt="쿠폰 버튼"
            isCollapse={isCollapse}
            onClick={handleButtonClick}
          />
        </CardButtonWrapper>
      </CardHeaderWrapper>
      <CardContentsWrapper ref={parentRef}>
        <div ref={childRef}>
          {list && <CouponList list={list} onSelectItem={handleSelectItem} />}
        </div>
      </CardContentsWrapper>
    </CouponCardWrapper>
  );
};

const CouponCardWrapper = styled(CardWrapper)`
  background-color: ${(props) =>
    props.disable ? "rgba(193, 193, 193, 0.2);" : "#fff"};
`;

const ArrowImgButton = styled.img`
  ${(props) => props.isCollapse && `transform: rotate(180deg);`}
`;

export default memo(CouponCard);
