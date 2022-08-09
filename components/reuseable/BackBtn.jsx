import Router from "next/router"
import Arrow from "../../assets/Arrow"
import StyledBackBtn from "../../styles/styledComponents/StyledBackBtn"

const BackBtn = ({ color, stroke }) => {

    const goBack = () => {
      Router.back()
    }

    return (
        <StyledBackBtn color={color} onClick={goBack} type="button"> <Arrow stroke={stroke} /> Go Back</StyledBackBtn>
    )
}

export default BackBtn