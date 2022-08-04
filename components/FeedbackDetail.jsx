import StyledFeedFeedbackDetail from "../styles/styledComponents/StyledFeedFeedbackDetail"
import BackBtn from "./reuseable/BackBtn"
import Suggestion from "./reuseable/Suggestion"

const FeedbackDetail = () => {
    return (
        <StyledFeedFeedbackDetail>
            <div className="top">
                <BackBtn stroke="blue" />

                <button>Edit Feedback</button>
            </div>

            <Suggestion
                title="Add dark theme option"
                detail="It would help people with light sensitivities and who prefer dark mode."
                category="Feature"
                border="none"
            />
        </StyledFeedFeedbackDetail>
    )
}

export default FeedbackDetail