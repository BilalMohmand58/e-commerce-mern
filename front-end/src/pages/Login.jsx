import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import mobile from "../responsive";
import { useDispatch, useSelector } from "react-redux";

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
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  margin: 20px 0px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 15px;
  &:: disabled {
    color: green;
    cursor: not-allowed;
  }
  ${mobile({ width: "100%" })}
`;

const Link = styled.a`
  margin-bottom: 20px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 5px;
`;
const Span = styled.span`
  font-size: 15px;
  ${mobile({ fontSize: "12px" })}
`;
const Error = styled.span`
  text-align: center;
  color: red;
  margin-top: 20px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>

        <Form>
          <Input
            placeholder="email"
            type={"email"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          <Link>Forgot Password</Link>
          <Span>
            Don't have an account?<Link href="/register">Sign up</Link>
          </Span>
          {error && <Error>Something went wrong!</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
