import NoFeedbackSvg from "../assets/NoFeedbackSvg"
import StyledNoFeedback from "../styles/styledComponents/StyledNoFeedback"
import AddFeedbackBtn from "./reuseable/AddFeedbackBtn"

const NoFeedback = () => {
    return (
        <StyledNoFeedback>
            <NoFeedbackSvg />

            <h3>There is no feedback yet.</h3>

            <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>

            <AddFeedbackBtn />
        </StyledNoFeedback>
    )
}

export default NoFeedback