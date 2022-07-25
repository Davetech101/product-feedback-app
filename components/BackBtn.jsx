import Router from "next/router"
import Arrow from "../assets/Arrow"
import StyledBackBtn from "../styles/styledComponents/StyledBackBtn"

const BackBtn = () => {
    const goBack = () => {
        Router.back()
    }
    return (
        <StyledBackBtn onClick={goBack}> <Arrow stroke="blue" /> Go Back</StyledBackBtn>
    )
}

export default BackBtn