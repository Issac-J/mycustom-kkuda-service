import styled from "styled-components";
import { body01 } from "../../styles/commonStyle";

const CouponList = ({ list, onSelectItem }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <ListItem
          key={index}
          active={item.active}
          onClick={() => onSelectItem(item)}>
          <span>{item.title}</span>
        </ListItem>
      ))}
    </ul>
  );
};

export default CouponList;

const ListItem = styled.li`
  ${body01}
  padding: 16px 52px;
  color: ${(props) => (props.active ? "var(--gray-08)" : "var(--gray-04)")};
  border-top: 1px solid var(--gray-03);
  cursor: pointer;
  pointer-events: ${(props) => (props.active ? "auto" : "none")};

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--gray-02);
  }

  &:active {
    background-color: var(--gray-03);
  }
`;
