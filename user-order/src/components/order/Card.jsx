import { memo } from "react";
import { useRecoilState } from "recoil";
import { productState as productInfo } from "../../recoil/orderInfo";
import List from "./List";

import {
  WhiteButton,
  BlueCircle,
  GrayOutlineCircle,
  BlackButton,
  GrayButton,
} from "../../styles/commonStyle";
import { CardSubTitle, CardTitle } from "../../styles/unit";
import {
  CardWrapper,
  CardHeaderWrapper,
  CardInfoWrapper,
  CardButtonWrapper,
  CardContentsWrapper,
} from "../../styles/wrapper";
import OrdererForm from "./OrdererForm";
import UserForm from "./UserForm";
import useAccordion from "../../hooks/useAccordion";

const Card = ({
  stepNum,
  title,
  subTitle,
  list,
  disable = false,
  isCompleted = false,
  onCompleteStep,
  setIsEditing,
}) => {
  const [productState, setProductState] = useRecoilState(productInfo);

  const { parentRef, childRef, isCollapse, handleButtonClick } =
    useAccordion(setIsEditing);

  const handleChangeFormHeight = (height) => {
    if (!isCollapse) return;

    parentRef.current.style.height = `${height}px`;
  };

  const handleSelectItem = (item) => {
    handleButtonClick();

    setProductState({
      ...productState,
      rentalMonth: item.month,
      rentalPrice: item.price,
    });
  };

  const handleCloseForm = () => {
    handleButtonClick();
    onCompleteStep(stepNum);
  };

  return (
    <CardWrapper disable={disable}>
      <CardHeaderWrapper>
        <CardInfoWrapper isCompleted={isCompleted}>
          {isCompleted && <BlueCircle>{stepNum}</BlueCircle>}
          {!isCompleted && <GrayOutlineCircle>{stepNum}</GrayOutlineCircle>}
          <div>
            {isCompleted && <CardTitle disable={false}>{title}</CardTitle>}
            {!isCompleted && <CardTitle disable={true}>{title}</CardTitle>}
            {subTitle && <CardSubTitle>{subTitle}</CardSubTitle>}
          </div>
        </CardInfoWrapper>
        <CardButtonWrapper>
          {!isCollapse && !isCompleted && disable && (
            <GrayButton>등록</GrayButton>
          )}
          {!isCollapse && !isCompleted && !disable && (
            <BlackButton onClick={handleButtonClick}>등록</BlackButton>
          )}
          {!isCollapse && isCompleted && (
            <WhiteButton onClick={handleButtonClick}>수정</WhiteButton>
          )}
        </CardButtonWrapper>
      </CardHeaderWrapper>
      <CardContentsWrapper ref={parentRef}>
        <div ref={childRef}>
          {list && <List list={list} onSelectItem={handleSelectItem} />}
          {!list && stepNum === 2 && (
            <OrdererForm
              onCloseForm={handleCloseForm}
              onChangeFormHeight={handleChangeFormHeight}
            />
          )}
          {!list && stepNum === 3 && (
            <UserForm
              onCloseForm={handleCloseForm}
              onChangeFormHeight={handleChangeFormHeight}
            />
          )}
        </div>
      </CardContentsWrapper>
    </CardWrapper>
  );
};

export default memo(Card);
