import styled from 'styled-components';

export default styled.input `
&[type = "text"]{
  margin: 2rem 0;
  width: 30%;
  height: 2.5rem;
  min-width: 170px;
}
&:focus {
  outline : none
}
`