import React from "react";
import { Button } from "react-bootstrap";
import { styled } from "styled-components";

export default function Cart() {
  return (
    <Wrapper>
      <div>
        <div className="d-flex justify-content-center mb-5">
          <h1>Shopping Bag-Checkout 🛒</h1>
        </div>
        <div className="w-100">
          <div className="row ms-2 hover-overlay hover-zoom hover-shadow ripple  ">
            <div
              className="col-1 row-flex justify-content-center"
              style={{ color: "#00B33C" }}
            >
              <img src="./images/elipseGreen.svg" alt="" />
            </div>
            <div className="col" style={{ color: "#00B33C" }}>
              <div className="row">
                <h1>₹55,000</h1>
              </div>

              <div className="row">
                <h4>Raipur|Quantity-3|Stall Type Details</h4>
              </div>
              <div className="row">
                <h5>Terms and Conditions-</h5>
                <p>
                  Select your favorite social network and share our icons with
                  your contacts or friends. If you dont have these social
                  network
                </p>
              </div>
            </div>
          </div>
          <div className="row ms-2 hover-overlay hover-zoom hover-shadow ripple  ">
            <div
              className="col-1 row-flex justify-content-center"
              style={{ color: "#FF6600" }}
            >
              <img src="./images/elipseOrange.svg" alt="" />
            </div>
            <div className="col">
              <div className="row p-0" style={{ color: "#FF6600" }}>
                <div className="col-11">
                  <p>₹25,000</p>
                </div>
                <div className="col">
                  <label>1</label>
                </div>
              </div>
            </div>
          </div>

          <div className="row ms-2 hover-overlay hover-zoom hover-shadow ripple  ">
            <div
              className="col-1 row-flex justify-content-center"
              style={{ color: "#808080" }}
            >
              <img src="./images/elipseOrange.svg" alt="" />
            </div>
            <div className="col">
              <div className="row p-0" style={{ color: "#808080" }}>
                <div className="col-11">
                  <p>₹25,000</p>
                </div>
                <div className="col">
                  <label>1</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-5 mt-3">
          <p className="parra">
            . We leavy a 50% Advance on all our Stall sales. The rest 50% shall
            be credited post the event.
          </p>
        </div>

        <div className="w-100 mt-5 ms-5">
          
            <div className="row">
              <div className="col-10">
                <p>Subtotal</p>
              </div>
              <div className="col">₹3,20,000.00</div>
            </div>
            <div className="row">
              <div className="col-10">
                <p>Tax</p>
              </div>
              <div className="col">
                <p>₹ 32,000.00</p>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <h3>TOTAL</h3>
              </div>
              <div className="col">
                <h3>₹3,52,000.00</h3>
              </div>
            </div>
            <div className="row ">
              <div className="buttonPay">
              <div className="w-100 d-flex justify-content-centers">
                <Button
                  variant="contained"
                  className="buttonClass"
                  type="submit"
                >
                  Pay Now
                </Button>
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 8rem;

  .buttonClass {
    z-index: 10;
    background: linear-gradient(98.44deg, #f54874 52.42%, #ec008c 107.37%);
    width: 330px;
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 34px;
    margin-left:30rem;
    margin-bottom:2rem;
  }

  .parra {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 29px;

    color: #eb008b;
  }
  .buttonPay{
    width:100%
  }
`;
