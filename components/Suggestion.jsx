import StyledSuggestions from "../styles/styledComponents/StyledSuggestion"

const Suggestion = ({title, category, detail}) => {
  return (
    <StyledSuggestions>
        <h3>{title}</h3>
        <small>{detail}</small>
        <span>{category}</span>
    </StyledSuggestions>
  )
}

export default Suggestion