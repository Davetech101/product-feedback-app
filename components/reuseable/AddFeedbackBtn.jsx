import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  background: #ad1fea;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
`;

const AddFeedbackBtn = () => {
  return (
    <Link href="/create-feedback" passHref>
      <StyledLink>+ Add Feedback</StyledLink>
    </Link>
  );
};

export default AddFeedbackBtn;
