import styled from '@emotion/styled';

export const List = styled.ul`
    padding:10px;
    background-color: #cccccc;
    border-radius: 10px;
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    &:not(:last-child) {
    // margin-bottom: 5px;
    }
`;

export const Button = styled.button`
    padding:5px;
    width: 100px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
  border: none;
  border-radius: 10px;
  border: 2px solid #fff;
  color: #fff;
  background-color: #8c98ba;
  text-align: center;
  transition: all 200ms linear;
  cursor: pointer;
  :hover {
    border: 2px solid #8c98ba;
    color: #8c98ba;
    background-color: #fff;
  }
`;