import styled from "styled-components";
import { body01, bodyLong01, bodyLong02, caption } from "./commonStyle";
import checkGreen from "../images/check-green.svg";

export const HeaderLogoWrapper = styled.div`
  display: none;
  width: 100%;
  height: 80px;
  background-color: var(--blue-01);

  img {
    padding: 21px 0 21px 100px;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export const MainHeaderWrapper = styled.div`
  background-color: #fff;
`;

export const MainWrapper = styled.div`
  max-width: 352px;
  margin: 0 auto;
  padding: 40px 22px 12px 22px;

  & > *:last-child > button {
    margin-top: 10px;
  }
`;

export const SubWrapper = styled.div`
  width: 100%;
  padding-top: 16px;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  overflow: hidden;
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: var(--gray-10);
  padding: ${(props) => props.padding || 0};

  img {
    width: 110px;
    height: 110px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
    ${bodyLong01}
    margin-bottom: 10px;
  }
  .price {
    ${bodyLong02}
  }
  .month {
    ${caption}
    color: var(--gray-05)
  }
`;

/* Card */
export const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => (props.disable ? "var(--gray-03)" : "#fff")};
  border-radius: 4px;
  border: 1px solid var(--gray-03);
  pointer-events: ${(props) => (props.disable ? "none" : "auto")};

  display: flex;
  flex-direction: column;
`;

export const CardHeaderWrapper = styled.div`
  padding: 17px 20px;

  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  gap: 10px;

  ${(props) =>
    props.isCompleted
      ? `h3 { margin-bottom: 6px; }`
      : `align-items: center; height: 38px;`}
`;

export const CardButtonWrapper = styled.div`
  align-self: center;
  cursor: pointer;
`;

export const CardContentsWrapper = styled.div`
  height: 0;
  width: inherit;
  overflow: hidden;

  transition: height 0.35s ease;
`;

/* Form */
export const FormWrapper = styled.div`
  padding: 8px 20px 20px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > button:last-child {
    margin-top: 10px;
  }
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid ${(props) => (props.error ? "#ff0000" : "var(--gray-02)")};
  background-color: ${(props) => (props.error ? "#fff" : "var(--gray-02)")};
  padding: 15px 25px;
  border-radius: 4px;

  &:focus-within {
    border: 1px solid ${(props) => (props.error ? "#ff0000" : "var(--gray-09)")};
    background: #fff;

    ${(props) =>
      props.error ||
      props.isEmpty ||
      `background-image: url(${checkGreen});
    background-repeat: no-repeat;
    background-position: 95% 50%`};
  }

  label {
    ${body01}
    color: var(--gray-05);
    display: relative;

    &::after {
      content: "";
      position: absolute;
      width: 3px;
      height: 3px;
      background: var(--blue-01);
      transform: translateX(4px);
    }
  }

  textarea {
    ${bodyLong02}
    color: var(--gray-08);
    background: transparent;
    border: none;
    outline: none;
    display: block;
    padding: 0;
    margin-top: 4px;
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    overflow-y: hidden;
    resize: none;

    &::placeholder {
      color: var(--gray-04);
    }
  }

  input {
    ${bodyLong02}
    color: var(--gray-08);
    background: transparent;
    border: none;
    outline: none;
    display: block;
    padding: 0;
    margin-top: 4px;
    box-sizing: border-box;
    width: 100%;

    &::placeholder {
      color: var(--gray-04);
    }
  }

  p {
    ${bodyLong02}
    color: var(--gray-08);
    background: transparent;
    border: none;
    outline: none;
    display: block;
    padding: 0;
    height: 28px;
    margin-top: 4px;
    box-sizing: border-box;
    width: 100%;
    min-height: 28px;
    height: 100%;
  }
`;

export const AddressInputWrapper = styled(InputWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    margin-right: -10px;
  }
`;

export const ReceiptWrapper = styled.div`
  margin: 20px 0 27px 0;
`;
