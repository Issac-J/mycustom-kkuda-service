import React from "react";
import styled from "styled-components";
import { subhead02 } from "../../styles/commonStyle";

const OrderStepBar = ({ step = 1 }) => {
  const stepPer = (step - 1) * 50;

  return (
    <OrderStepBarStyle>
      <StepBar stepPer={stepPer}>
        <StepCircle isActive={step >= 1} />
        <StepCircle isActive={step >= 2} />
        <StepCircle isActive={step >= 3} />
      </StepBar>
      <StepTitleDiv>
        <StepTitle isActive={step >= 1}>정보입력</StepTitle>
        <StepTitle isActive={step >= 2}>정보확인</StepTitle>
        <StepTitle isActive={step >= 3}>계약완료</StepTitle>
      </StepTitleDiv>
    </OrderStepBarStyle>
  );
};

const OrderStepBarStyle = styled.div`
  max-width: 254px;
  margin: 0 auto;
  padding: 32px 60px 12px 60px;

  @media (min-width: 768px) {
    padding: 32px 60px 25px 60px;
  }
`;

const StepBar = styled.div`
  ${(props) => `
    background: linear-gradient(
      to right,
      var(--blue-01) ${props.stepPer}%,
      var(--gray-03) ${props.stepPer}%
    );
  `};

  max-width: 254px;
  height: 4px;

  display: flex;
  justify-content: space-between;

  * {
    margin-top: 2px;

    &:first-child {
      transform: translate(-50%, -50%);
      margin-left: -4px;
    }

    &:nth-child(2) {
      transform: translate(0, -50%);
    }

    &:last-child {
      transform: translate(50%, -50%);
      margin-right: -4px;
    }
  }
`;

const StepCircle = styled.span`
  box-sizing: border-box;
  display: inline-block;
  border-radius: 100px;
  width: 16px;
  height: 16px;
  ${(props) =>
    props.isActive
      ? `background: #ffffff; border: 4px solid var(--blue-01);`
      : `background: #C1C1C1; border: 4px solid var(--gray-03);`}
`;

const StepTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  *:first-child {
    transform: translate(-60%, 0);
  }

  *:last-child {
    transform: translate(60%, 0);
  }
`;

const StepTitle = styled.h3`
  ${subhead02}

  ${(props) =>
    props.isActive
      ? `color: var(--gray-10);`
      : `font-weight: 400; color: var(--gray-06)`};
`;

export default OrderStepBar;
