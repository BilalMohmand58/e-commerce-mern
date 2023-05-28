import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
import mobile from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { useRequest } from "../requestMethods";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  width: 20%;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  ${mobile({ width: "45%", fontWeight: "300", height: "40px" })}
`;

const styledLink = {
  width: "20%",
  padding: "10px",
  fontWeight: "600",
  cursor: "pointer",
  textDecoration: "none",
  color: "white",
  border: "1px solid black",
  backgroundColor: "black",
  textAlign: "center",
};
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const Text = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 2;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ paddingLeft: "0px", marginTop: "5px" })}
`;

const ProductName = styled.div``;

const ProductID = styled.div``;

const ProductColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;

const ProductSize = styled.div``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "row", justifyContent: "space-around" })}
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 700;
`;
const Quantity = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const HR = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-bottom: 5px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  margin-left: 30px;
  border-radius: 10px;
  height: 50vh;
  ${mobile({ margin: "40px 20px" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: black;
  color: white;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleClick = () => {
    dispatch(emptyCart());
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await useRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart, navigate]);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Cart</Title>
        <Top>
          <Link to="/" style={styledLink}>
            Continue Shopping
          </Link>

          <TopTexts>
            <Text>Shopping({cart.quantity})</Text>
            <Text>Wishlist(0)</Text>
          </TopTexts>

          <TopButton onClick={handleClick}>Empty Cart</TopButton>
        </Top>

        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetails>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Product </b> {product.title}
                    </ProductName>
                    <ProductID>
                      <b>ID :</b>
                      {product._id}
                    </ProductID>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size :</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <QuantityContainer>
                    <Remove />
                    <Quantity>{product.quantity}</Quantity>
                    <Add />
                  </QuantityContainer>
                  <ProductPrice>
                    Rs {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetails>
                <HR />
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping cost</SummaryItemText>
              <SummaryItemPrice>Rs 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>Rs 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
            </SummaryItem>

            <StripeCheckout
              name="Rangoona."
              image=""
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>Checkout Now</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
