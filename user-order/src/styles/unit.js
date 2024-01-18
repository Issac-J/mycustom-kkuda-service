import styled from "styled-components";
import {
  body01,
  display01,
  display03,
  bodyLong01,
  headline,
  subhead02,
  subhead03,
  caption,
} from "./commonStyle";

export const HeaderTitle = styled.h1`
  padding: 61px 0 17px 0;
  text-align: center;
  ${headline}

  @media (min-width: 768px) {
    ${display03}
    line-height: 46px;
    padding: 46px 0;
  }
`;

export const MainTitle = styled.h2`
  color: var(--gray-10);
  margin-bottom: 8px;

  ${display01}
`;

export const MainItemTitle = styled.p`
  color: #222222;
  margin-bottom: 26px;
  width: 245px;

  ${bodyLong01}
`;

export const CardTitle = styled.h3`
  color: ${(props) => (props.disable ? "var(--gray-05)" : "var(--gray-10)")};
  ${subhead03};
`;

export const CardSubTitle = styled.span`
  color: ${(props) => (props.disable ? "var(--gray-05)" : "var(--gray-08)")};
  ${body01}
`;

export const SubTitle = styled.h2`
  ${display01}
  font-size: 24px;
  padding-bottom: 24px;
`;

export const InfoStyle = styled.div`
  padding: 16px 20px 30px 20px;
  display: block;
  background-color: #fff;
  border-top: 1px solid #dfdfdf;
`;

export const InfoTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 16px;
`;

export const Content = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.6px;
  padding-bottom: 8px;

  label {
    width: 80px;
    height: 20px;
    color: #6f6f6f;
    flex-shrink: 0;
  }
  span {
  }
`;

export const Rental = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 7px;

  label {
    ${bodyLong01};
    color: #333;
  }

  span {
    ${subhead02}
    color: #171717;
  }
`;

export const RentalTotalCharge = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #171717;
  padding-top: 20px;

  label {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.6px;
    color: #171717;
  }

  span {
    color: #30cee6;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.6px;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.6px;
  color: #ff0000;
  margin: 4px 0 0 20px;
`;

/* Form */
export const FormCopyButton = styled.button`
  ${caption}
  background: transparent;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;
  align-self: flex-end;

  ${(props) =>
    props.isCopied
      ? `color: var(--blue-01); border: 1px solid var(--blue-01);`
      : `color: var(--gray-04); border: 1px solid var(--gray-03); `};

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--gray-01);
  }

  &:active {
    background-color: var(--gray-02);
  }
`;

export const FormCheckIcon = styled.img`
  margin-right: 4px;
`;
