import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --gray-01: #FBFBFB;
    --gray-02: #F5F4F3;
    --gray-03: #DFDFDF;
    --gray-04: #C1C1C1;
    --gray-05: #A5A5A5;
    --gray-06: #8B8B8B;
    --gray-07: #6F6F6F;
    --gray-08: #555;
    --gray-09: #333;
    --gray-10: #171717;

    --blue-01: #30CEE6;
    --blue-02: #57D8EC;
    --blue-03: #A9F2FD;
    --blue-04: #D6F2F6;
  }
`;

/* Title */
export const display05 = css`
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -0.6px;
`;

export const display04 = css`
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: -0.6px;
`;

export const display03 = css`
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -0.6px;
`;

export const display02 = css`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.6px;
`;

export const display01 = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.6px;
`;

export const headline = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.6px;
`;

export const subhead03 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.6px;
`;

export const subhead02 = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.6px;
`;

/* Body */
export const body02 = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.6px;
`;

export const bodyLong02 = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.6px;
`;

export const body01 = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.6px;
`;

export const bodyLong01 = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.6px;
`;

export const caption = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.6px;
`;

/* Circle */
export const BlueCircle = styled.div`
  ${subhead02};
  line-height: 28px;
  height: 26px;
  width: 26px;
  border-radius: 100px;
  color: #fff;
  background: var(--blue-01);
  text-align: center;
  flex-shrink: 0;
`;

export const GrayCircle = styled.div`
  ${subhead02};
  line-height: 28px;
  height: 26px;
  width: 26px;
  border-radius: 100px;
  color: #fff;
  background: var(--gray-03);
  text-align: center;
  flex-shrink: 0;
`;

export const GrayOutlineCircle = styled.div`
  ${subhead02};
  line-height: 26px;
  box-sizing: border-box;
  height: 26px;
  width: 26px;
  border-radius: 100px;
  border: 1px solid var(--gray-04);
  color: var(--gray-04);
  background: transparent;
  text-align: center;
  flex-shrink: 0;
`;

/* Button */
export const BlackButton = styled.button`
  ${subhead02}
  width: ${(props) => props.width || "58px"};
  height: ${(props) => props.height || "38px"};
  border: none;
  border-radius: 4px;
  background: var(--gray-09);
  color: #fff;
  text-align: center;
  line-height: 38px;
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--gray-08);
  }
  &:active {
    background-color: var(--gray-07);
  }
`;

export const GrayButton = styled.button`
  ${subhead02}
  width: ${(props) => props.width || "58px"};
  height: ${(props) => props.height || "38px"};
  border: none;
  border-radius: 4px;
  background: var(--gray-04);
  color: #fff;
  text-align: center;
  line-height: 38px;
  cursor: pointer;
`;

export const WhiteButton = styled.button`
  ${subhead02}
  width: ${(props) => props.width || "58px"};
  height: ${(props) => props.height || "38px"};
  border: 1px solid var(--gray-03);
  border-radius: 4px;
  background: #fff;
  color: var(--gray-09);
  text-align: center;
  line-height: 38px;
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--gray-01);
  }
  &:active {
    background-color: var(--gray-02);
  }
`;

export const BlueButton = styled.button`
  ${subhead02}
  width: ${(props) => props.width || "58px"};
  height: ${(props) => props.height || "38px"};
  border: none;
  border-radius: 4px;
  background: ${(props) =>
    props.disabled ? "var(--blue-04)" : "var(--blue-01)"};
  color: #fff;
  text-align: center;
  line-height: 38px;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--blue-02);
  }
`;
