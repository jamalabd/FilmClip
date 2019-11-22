import styled from 'styled-components';
import theme from '../styles/Theme';

export default styled.div `
  background-color: ${({theme}) => theme.primaryDark};
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({theme}) => theme.primaryLight};
  padding: 20px;
  cursor: pointer;
`