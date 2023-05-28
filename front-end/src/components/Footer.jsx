import {
  Instagram,
  Twitter,
  Room,
  Phone,
  MailOutline,
  GitHub,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Rangoona.</Logo>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </Description>
        <SocialContainer>
          <SocialIcon color="100F0F">
            <a
              target="_blank"
              href="https://github.com/BilalMohmand58"
              style={{ textDecoration: "none", color: "inherit" }}
              rel="noreferrer"
            >
              <GitHub />
            </a>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <a
              target="_blank"
              href="https://twitter.com/BilalMohmand58"
              style={{ textDecoration: "none", color: "inherit" }}
              rel="noreferrer"
            >
              <Twitter />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </ListItem>

          <ListItem>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Men's Fashion
            </Link>
          </ListItem>

          <ListItem>
            <Link
              to="/products/womens"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Women's Fashion
            </Link>
          </ListItem>

          <ListItem>
            <Link
              to="/products/kids"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Kid's Fashion
            </Link>
          </ListItem>

          <ListItem>Accessories</ListItem>
          <ListItem>Jewlery</ListItem>

          <ListItem>
            <Link
              to="/products/shoes"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Shoes
            </Link>
          </ListItem>

          <ListItem>
            <Link
              to="/products/new"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              New Arrivals
            </Link>
          </ListItem>

          <ListItem>Sales</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 111-A I-8/4 Islamabad,
          Pakistan
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +923420230279
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          bilalahmadkhan@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
