import styled from "styled-components";
import { headline } from "../styles/commonStyle";

const NotFound = () => {
  return <NotFoundStyle>잘못된 경로입니다.</NotFoundStyle>;
};

const NotFoundStyle = styled.div`
  ${headline}
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NotFound;
