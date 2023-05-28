import { Send } from "@material-ui/icons";

import React from "react";
import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "40px" })}
`;
const Description = styled.div`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 300;
  ${mobile({ textAlign: "center", fontSize: "14px" })}
`;
const InputContainer = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  background-color: white;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "75%" })}
`;
const Input = styled.input`
  outline: none;
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  border: none;
  flex: 1;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get latest Updates about Products and Sales</Description>
      <InputContainer>
        <Input placeholder="example@gmail.com" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
