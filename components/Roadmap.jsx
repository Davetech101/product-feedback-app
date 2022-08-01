import StyledRoadmap from "../styles/styledComponents/StyledRoadmap"
import BackBtn from "./reuseable/BackBtn"
import AddFeedbackBtn from "./reuseable/AddFeedbackBtn"

const Roadmap = () => {
    return (
        <StyledRoadmap>

            <div className="head">
                <div>
                    <BackBtn color="white" stroke="white" />
                    <h3>Roadmap</h3>
                </div>
                <AddFeedbackBtn />
            </div>

            <div className="subHead">
                <div className="planned">
                    Planned (2)
                </div>

                <div className="inProgress">
                    In-Progress (3)
                </div>

                <div className="live">
                    Live (1)
                </div>
            </div>

            <div>
                <h2>
                    In-Progress (3)
                </h2>

                <small>
                    Features currently being developed
                </small>
            </div>

        </StyledRoadmap>
    )
}

export default Roadmap