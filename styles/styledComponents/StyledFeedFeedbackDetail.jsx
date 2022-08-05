import styled from "styled-components";

const StyledFeedFeedbackDetail = styled.section`
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.4rem;
  }

  .top a{
    background: #4661e6;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    text-decoration: none;
    color: #fff;
    font-size: 1.3rem;
  }

  .addComment{
    background:#fff;
    border-radius:4px;
  }

  .addComment div{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  .addComment button{
    background: #AD1FEA;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    text-decoration: none;
    color: #fff;
    font-size: 1.3rem;
  }
`;

export default StyledFeedFeedbackDetail;
