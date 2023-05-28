import React from "react";
import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #f6f6f6;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  display: flex;
`;
const Check = styled.input``;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({ width: "50%" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>

        <Form>
          <Input placeholder="username" />
          <Input placeholder="email" type={"email"} />
          <Input placeholder="password" type={"password"} />

          <Agreement>
            <Check type={"checkbox"} style={{ marginRight: "5px" }} />{" "}
            <b>Terms & Conditions</b>
          </Agreement>
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
