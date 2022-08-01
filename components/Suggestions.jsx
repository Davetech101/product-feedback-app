import { useSelector } from "react-redux"
import { store } from "../redux/store";
import Suggestion from "./Suggestion";

const Suggestions = () => {

    const feedback = useSelector((store) => store.feedback)
    const feedbacks = feedback.feedbacks

    const category = useSelector((store) => store.category)

    const dummySuggestiins = [{
        title: "Title one",
        category: "UI",
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
    },

    {
        title: "Title two",
        category: "UX",
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
    },

    {
        title: "Title three",
        category: "Enhancement",
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
    },

    {
        title: "Title four",
        category: "Feature",
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
    },

    {
        title: "Title five",
        category: "Bug",
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, officia.",
    },]


    const filteredFeedbacks = feedbacks.filter(feedback => {
        if (category === "All") {
            return  <Suggestion key={Math.random()} title={feedback.title} category={feedback.category} detail={feedback.detail} />
        }else{
            return feedback.category === category
        }
    })

    const finalFeedbacks = filteredFeedbacks.map(feedback => (
        <Suggestion key={Math.random()} title={feedback.title} category={feedback.category} detail={feedback.detail} />
    ))
console.log(feedbacks);
    return (
        <div style={{ marginTop: "10rem" }}>
            {finalFeedbacks}
        </div>
    )
}

export default Suggestions