import styled from "styled-components";
import { body01 } from "../../styles/commonStyle";
import { insertCommas } from "../../utils/numberUtil";

const List = ({ list, onSelectItem }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.month} onClick={() => onSelectItem(item)}>
          <span>월 {insertCommas(item.price)}원</span>
          <span> / </span>
          <span>{item.month}개월 장기렌탈</span>
        </ListItem>
      ))}
    </ul>
  );
};

export default List;

const ListItem = styled.li`
  ${body01}
  padding: 16px 52px;
  color: var(--gray-08);
  border-top: 1px solid var(--gray-03);
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--gray-02);
  }

  &:active {
    background-color: var(--gray-03);
  }
`;
