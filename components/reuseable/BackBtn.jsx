import Router from "next/router"
import Arrow from "../../assets/Arrow"
import styled from "styled-components"

const BackBtn = ({ color, stroke }) => {

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

    const goBack = () => {
      Router.back()
    }

    return (
        <StyledBackBtn color={color} onClick={goBack} type="button"> <Arrow stroke={stroke} /> Go Back</StyledBackBtn>
    )
}

export default BackBtn