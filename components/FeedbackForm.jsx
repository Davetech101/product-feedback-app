import { useState } from "react"
import StyledFeedbackForm from "../styles/styledComponents/StyledFeedbackForm"
import Arrow from "../assets/Arrow"

const FeedbackForm = () => {
    const [category, setCategory] = useState("Feature")
    const [showSelect, setShowSelect] = useState(false)
    const categories = ["UI", "UX", "Enhancement", "Bug", "Feature"]

    const categorySelcet = categories.map(category =>
    (
        <button key={category} value={category} type="button" className="select" onClick={(e) => {setCategory(e.target.value), setShowSelect(false)}}>{category}</button>)
    )

    return (
        <StyledFeedbackForm>
            <div className="svgCont">
                +
            </div>

            <h2>Create New Feedback</h2>

            <div>
                <label htmlFor="title">
                    <h3>Feedback Title</h3>
                </label>

                <small>
                    Add a short, descriptive headline
                </small>

                <input type="text" id="title" className="input" />
            </div>

            <div style={{ position: "relative" }}>
                <h3>
                    Category
                </h3>

                <small>
                    Choose a category for your feedback
                </small>

                <button type="button" className="category input" onClick={() => setShowSelect(prev => !prev)}>{category} <span className={showSelect ? "rotate" : "arrow"}><Arrow stroke="blue" /></span></button>

                <div className={!showSelect ? "categorySelect" : "categorySelect showSelect"}>
                    {categorySelcet}
                </div>
            </div>

            <div>
                <label htmlFor="detail">
                    <h3>Feedback Detail</h3>
                </label>

                <small>
                    Include any specific comments on what should be improved, added, etc.
                </small>

                <textarea name="" id="detail" className="input"></textarea>
            </div>

            <button className="add" type="submit">Add Feedback</button>
            <button className="cancel" type="button">Cancel</button>
        </StyledFeedbackForm>
    )
}

export default FeedbackForm