import Link from "next/link";
import { useState } from "react";
import StyledFeedFeedbackDetail from "../styles/styledComponents/StyledFeedFeedbackDetail";
import BackBtn from "./reuseable/BackBtn";
import Suggestion from "./reuseable/Suggestion";

const FeedbackDetail = () => {
  const [comment, setComment] = useState("");


  const dummyComments = [
    {
      name: "James Skinner",
      handle: "JSKINNER",
      comment:
        "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
    },

    {
      name: "Annie VAl",
      handle: "Ann",
      comment:
        "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
    },

    {
      name: "Elijah Moses",
      handle: "Ipathedtheredsea",
      comment:
        "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
    },

    {
      name: "Ryan Willie",
      handle: "willyan",
      comment:
        "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
    },
  ];

  return (
    <StyledFeedFeedbackDetail>
      <div className="top">
        <BackBtn stroke="blue" />

        <Link href="/pass">Edit Feedback</Link>
      </div>

      <Suggestion
        title="Add dark theme option"
        detail="It would help people with light sensitivities and who prefer dark mode."
        category="Feature"
        border="none"
      />

      <div className="commentBox">
        <div>4 Comments</div>
      </div>

      <div className="addComment">
        <h3>Add Comment</h3>

        <form>
          <textarea
            placeholder="Type your comment here"
            maxLength="250"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <div>
            <p>{250 - comment.length} characters left</p>

            <button>Post Comment</button>
          </div>
        </form>
      </div>
    </StyledFeedFeedbackDetail>
  );
};

export default FeedbackDetail;
