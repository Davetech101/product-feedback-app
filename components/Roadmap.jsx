import { useState } from "react"
import Suggestion from "./reuseable/Suggestion"
import StyledRoadmap from "../styles/styledComponents/StyledRoadmap"
import BackBtn from "./reuseable/BackBtn"
import AddFeedbackBtn from "./reuseable/AddFeedbackBtn"

const dummySuggestiins = [{ 
    group: "In-Progress",
    title: "Title one",
    category: "UI",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
},

{
    group: "In-Progress",
    title: "Title one",
    category: "UI",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
},

{
    group: "Live",
    title: "Title two",
    category: "UX",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
},

{
    group: "Live",
    title: "Title two",
    category: "UX",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
},

{
    group: "Live",
    title: "Title two",
    category: "UX",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
},

{
    group: "Planned",
    title: "Title three",
    category: "Enhancement",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
},

{
    group: "In-Progress",
    title: "Title four",
    category: "Feature",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
},

{
    group: "Live",
    title: "Title five",
    category: "Bug",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
},

{
    group: "Planned",
    title: "Title five",
    category: "Bug",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
}]

const Roadmap = () => {

    const [groupSelect, setGroupSelect] = useState({
        title: "In-Progress",
        txt: "Currently being developed",
    })

    const groups = [
        {
            title: "Planned",
            txt: "Ideas prioritized for research"
        },

        {
            title: "In-Progress",
            txt: "Currently being developed"
        },

        {
            title: "Live",
            txt: "Released features"
        }
    ]


    const filteredFeedbacks = dummySuggestiins.filter(feedback => {
        return feedback.group === groupSelect.title
    })

    const finalFeedbacks = filteredFeedbacks.map(feedback => (
        <Suggestion
            key={Math.random()}
            title={feedback.title}
            category={feedback.category}
            detail={feedback.detail}
            group={feedback.group}
            border="6px"
            color={
                feedback.group === "In-Progress" ? "#AD1FEA" :
                    feedback.group === "Planned" ? "#F49F85" : "#62BCFA"
            }
        />
    ))

    return (
        <StyledRoadmap group={groupSelect.title}>

            <div className="head">
                <div>
                    <BackBtn color="white" stroke="white" />
                    <h3>Roadmap</h3>
                </div>
                <AddFeedbackBtn />
            </div>

            <div className="subHead">
                {
                    groups.map(group =>
                    (
                        <button
                            key={group.title}
                            onClick={(e) => setGroupSelect(group)}
                            className={group.title === groupSelect.title ? "active" : ""}
                        >
                            {group.title} ({dummySuggestiins.filter(item => {
                                return item.group === group.title
                            }).length})
                        </button>
                    ))
                }
            </div>

            <div style={{ marginTop: "16rem" }}>

                <div className="top">
                    <h3>{groupSelect.title} (3)</h3>
                    <small>{groupSelect.txt}</small>
                </div>

                {finalFeedbacks}

            </div>

        </StyledRoadmap>
    )
}

export default Roadmap