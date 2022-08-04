import Header from "../components/Header.jsx"
import NoFeedback from "../components/NoFeedback.jsx"
import Suggestions from "../components/Suggestions.jsx"
import { useSelector } from "react-redux"
import FeedbackDetail from "../components/FeedbackDetail.jsx"

export default function Home() {
  const feedback = useSelector((store) => store.feedback)
  const feedbacks = feedback.feedbacks

  return (
    <div>
      {/* <Header />
      {feedbacks.length > 0 ? <Suggestions /> : <NoFeedback />} */}
      <FeedbackDetail/>
    </div>
  )
}
