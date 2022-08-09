import { useCallback, useState } from "react";
import StyledFeedbackForm from "../../styles/styledComponents/StyledFeedbackForm";
import Arrow from "../../assets/Arrow";
import { useDispatch } from "react-redux";
import { createFeedback } from "../../redux/feedback/feedbackSlice";
import Router from "next/router";
import { useSelector } from "react-redux";
import Edit from "../../assets/Edit";

const FeedbackForm = () => {
  const { details } = useSelector((store) => store.details);

  const [category, setCategory] = useState(
    details ? details.category : "Feature"
  );
  const [showSelect, setShowSelect] = useState(false);
  const [formData, setFormData] = useState({
    title: details ? details.title : "",
    detail: "",
  });
  const categories = ["UI", "UX", "Enhancement", "Bug", "Feature"];
  const dispatch = useDispatch();

  const categorySelcet = categories.map((category) => (
    <button
      key={category}
      value={category}
      type="button"
      className="select"
      onClick={(e) => {
        setCategory(e.target.value), setShowSelect(false);
      }}
    >
      {category}
    </button>
  ));

  const onChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }, []);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (
        formData.title.trim().length === 0 ||
        formData.detail.trim().length === 0
      ) {
        return;
      } else {
        const submitValue = {
          ...formData,
          category,
        };
        dispatch(createFeedback(submitValue));
      }
      e.target.reset();
    },
    [category, dispatch, formData]
  );

  return (
    <StyledFeedbackForm onSubmit={submitHandler}>
      <div className="svgCont">{details ? <Edit/> : "+"}</div>

      <h2>{details ? `Editing '${details.title}'` : "Create New Feedback"}</h2>

      <div>
        <label htmlFor="title">
          <h3>Feedback Title</h3>
        </label>

        <small>Add a short, descriptive headline</small>

        <input
          type="text"
          id="title"
          className="input"
          onChange={onChange}
          value={formData.title}
          required
        />
      </div>

      <div style={{ position: "relative" }}>
        <h3>Category</h3>

        <small>Choose a category for your feedback</small>

        <button
          type="button"
          className="category input"
          onClick={() => setShowSelect((prev) => !prev)}
        >
          {category}{" "}
          <span className={showSelect ? "rotate" : "arrow"}>
            <Arrow stroke="blue" />
          </span>
        </button>

        <div
          className={
            !showSelect ? "categorySelect" : "categorySelect showSelect"
          }
        >
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

        <textarea
          name=""
          id="detail"
          className="input"
          onChange={onChange}
          required
        >
          {details && details.detail}
        </textarea>
      </div>

      <button className="add" type="submit">
        {details ? "Save Changes" : "Add Feedback"}
      </button>
      <button className="cancel" type="button" onClick={() => Router.back()}>
        Cancel
      </button>
      {details && <button className="delete" type="button">Delete</button>}
    </StyledFeedbackForm>
  );
};

export default FeedbackForm;
