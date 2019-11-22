import styled from 'styled-components';

export default styled.input `
&[type="submit"] {
  padding: 5px;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  width: 80px;
  margin-left: 5px;
  cursor: pointer;
}
  &:hover {
    background-color: ${({theme}) => theme.primaryDark};
    color: ${({theme}) => theme.primaryLight};
  }
`