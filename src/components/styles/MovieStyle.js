import styled from 'styled-components';
import theme from '../styles/Theme';

export const MovieStyle = styled.div `
  padding: 1rem 2rem;
  max-width: 25%;
  background-color: ${({theme}) => theme.primaryDark};
  border-radius: .6rem;
  margin: 2rem 1rem;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.8);
  transition: all .4s;
  cursor: pointer;
  :hover {
    transform: translateY(-7px);
  }
`;

export const H2Style = styled.h2 `
  color: ${({theme}) => theme.primaryLight};
`;
export const ImgStyle = styled.img `
  margin: 1rem 0;
  width: 200px;
  height: 300px;
`;

export const ParagStyle = styled.p `
  color: ${({theme}) => theme.primaryLight};
`;

export const DiscStyle = styled.div `
  display: flex;
`;