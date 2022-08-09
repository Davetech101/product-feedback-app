import Link from "next/link";
import { useState, useEffect } from "react";
import StyledFeedFeedbackDetail from "../styles/styledComponents/StyledFeedFeedbackDetail";
import BackBtn from "./reuseable/BackBtn";
import Suggestion from "./reuseable/Suggestion";
import { useDispatch } from "react-redux";
import { fbDetail } from "../redux/fbDetail/fbDetailSlice";

const FeedbackDetail = () => {
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState(false);
  const dispatch = useDispatch();

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

  const details = {
    title: "Add dark theme option",
    detail:
      "It would help people with light sensitivities and who prefer dark mode.",
    category: "UI",
  };

  return (
    <StyledFeedFeedbackDetail>
      <div className="top">
        <BackBtn stroke="blue" color="#647196" />

        <Link href="/edit-feedback" passHref>
          <a onClick={() => dispatch(fbDetail(details))}>Edit Feedback</a>
        </Link>
      </div>

      <Suggestion
        title={details.title}
        detail={details.detail}
        category={details.category}
        border="none"
      />

      <div className="commentBox">
        <h2>{dummyComments.length} Comments</h2>

        {dummyComments.map((comment) => (
          <div key={comment.handle} className="comment">
            <div className="top">
              <div className="name">
                <h3>{comment.name}</h3>

                <small>@{comment.handle}</small>
              </div>

              <button onClick={() => setReply((prev) => !prev)}>Reply</button>
            </div>

            <p>{comment.comment}</p>

            {reply && (
              <form>
                <textarea>{`@${comment.handle}`}</textarea>
                <button>Post reply</button>
              </form>
            )}
          </div>
        ))}
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
