import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #fff;
`;

export const MainStyle = styled.main`
  /* 전체 창 높이에서 Header, Footer 높이 빼준 값 */
  min-height: calc(100vh - 56px);
  background-color: #f5f5f5;

  display: block;

  @media (min-width: 768px) {
    /* 전체 창 높이에서 Header 높이 빼준 값 */
    min-height: calc(100vh - 80px);
  }
`;

export const FooterStyle = styled.footer`
  height: 56px;

  @media (min-width: 768px) {
    display: none;
  }
`;
