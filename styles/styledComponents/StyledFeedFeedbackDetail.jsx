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

  .commentBox{
    background:#fff;
    border-radius:4px;
    padding:2.4rem;
    margin-bottom:2.4rem;
  }

  .commentBox > h2{
    margin-bottom:2.4rem;
    color:#3A4374;
    font-size:1.8rem;
  }

  .comment{
    padding:2.4rem 0;
    border-bottom:1px solid rgba(0, 0, 0, .1);
    color:#647196;
    font-size:1.3rem;
  }

  .comment .top{
    margin-bottom:1rem;
  }

  .comment button{
    color:#4661E6;
    font-size:1.3rem;
  }

  .comment h3{
    font-size:1.3rem;
    color:#3A4374;
  }

  .comment small{
    font-size:1.3rem;
  }

  .addComment{
    background:#fff;
    border-radius:4px;
    padding:2.4rem;
  }

  .addComment h3{
    font-size:1.8rem;
    margin-bottom:2.4rem;
  }

  .addComment textarea{
    background:#F7F8FD;
    width:100%;
    min-height:8rem;
    padding:1.6rem;
    margin-bottom:1.6rem;
  }

  .addComment div{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  .addComment p{
    font-size:1.5rem;
    color:#647196;
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
