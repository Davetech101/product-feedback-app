import styled from "styled-components"


const StyledBackBtn = styled.button`
display:flex;
align-items:center;
font-size:1.3rem;
color:${props => props.color};
z-index:1;
position:relative;

span{
  transform:rotate(85deg);
  display:block;
  margin-right:1rem;
}
`

export default StyledBackBtn