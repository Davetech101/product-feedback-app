import StyledSuggestions from "../styles/styledComponents/StyledSuggestion"

const Suggestion = ({ title, category, detail, group, color, border }) => {
  return (
    <StyledSuggestions color={color} border={border}>
      {group &&  <small className="group"><span className="color"></span>{group}</small>}
      <h3>{title}</h3>
      <small>{detail}</small>
      <span className="category">{category}</span>
    </StyledSuggestions>
  )
}

export default Suggestion