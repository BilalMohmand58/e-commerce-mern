import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import mobile from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutSuccess } from "../redux/userRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
  height: 70px;
  color: back;
  ${mobile({ height: "50px", marginBottom: "10px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid grey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "5px" })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "45px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px", marginLeft: "10px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItems = styled.div`
  margin-left: 25px;
  font-size: 14px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutSuccess());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Rangoona.</Logo>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItems>Register</MenuItems>
          </Link>

          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItems>Sign in</MenuItems>
          </Link>

          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItems onClick={handleClick}>logout</MenuItems>
          </Link>

          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItems>
              <Badge color="primary" badgeContent={quantity}>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
