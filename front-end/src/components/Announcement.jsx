import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #d6efed;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Free shipping all over Pakistan 🤯</Container>;
};

export default Announcement;
