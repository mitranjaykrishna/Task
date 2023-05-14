import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function SelectSeats() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);

  return (
    <>
      <Wrapper>
        <div className="d-flex justify-content-center">
          <img src="./images/mappingImage.svg" alt="" className="w-50" />{" "}
        </div>
        {/* <div className="container"> */}
        <div className="mb-4">
          <div className="row ms-2 ">
            <div className="col-9 ">
              <h4>Colour Code</h4>
            </div>
            <div className="col" style={{ color: "#00B33C" }}>
              H1-
              <img src="./images/elipseGreen.svg" alt="" />
            </div>
            <div className="col" style={{ color: "#FF6600" }}>
              H2-
              <img src="./images/elipseOrange.svg" alt="" />
            </div>
            <div className="col" style={{ color: "#808080" }}>
              H3-
              <img src="./images/elipseGrey.svg" alt="" />
            </div>
          </div>
          {/* </div> */}

          <div className="row ms-2 hover-overlay hover-zoom hover-shadow ripple  ">
            <div
              className="col-1 row-flex justify-content-center"
              style={{ color: "#00B33C" }}
            >
              <img src="./images/elipseGreenStar.svg" alt="" />
            </div>
            <div className="col-1 p-0" style={{ color: "#00B33C" }}>
              <p>₹55,000</p>
            </div>
            <div className="col-8" style={{ color: "#00B33C" }}>
              <p>32Sq.Mt.</p>
            </div>
            <div className="col" style={{ color: "#00B33C" }}>
              <img
                src="./images/add.svg"
                alt=""
                onClick={() => setVal1(val1 + 1)}
              />
              <label className="m-3">{val1}</label>{" "}
              <img
                src="./images/sub.svg"
                alt=""
                onClick={() => setVal1(val1 - 1)}
              />
            </div>
          </div>

          <div className="row ms-2 hover-overlay hover-zoom hover-shadow ripple ">
            <div
              className="col-1 row-flex justify-content-center"
              style={{ color: "#FF6600" }}
            >
              <img src="./images/elipseOrange.svg" alt="" />
            </div>
            <div className="col-1 p-0" style={{ color: "#FF6600" }}>
              <p>₹35,000</p>
            </div>
            <div className="col-8" style={{ color: "#FF6600" }}>
              <p>24 Sq.Mt.</p>
            </div>
            <div className="col" style={{ color: "#FF6600" }}>
              <img
                src="./images/add.svg"
                alt=""
                onClick={() => setVal2(val2 + 1)}
              />
              <label className="m-3">{val2}</label>{" "}
              <img
                src="./images/sub.svg"
                alt=""
                onClick={() => setVal2(val2 - 1)}
              />
            </div>
          </div>

          <div className="row ms-2 hover-overlay hover-zoom hover-shadow ripple ">
            <div
              className="col-1 row-flex justify-content-center "
              style={{ color: "#808080" }}
            >
              <img src="./images/elipseGrey.svg" alt="" />
            </div>
            <div className="col-1 p-0" style={{ color: "#808080" }}>
              <p>₹25,000</p>
            </div>
            <div className="col-8" style={{ color: "#808080" }}>
              <p>18 Sq.Mt.</p>
            </div>
            <div className="col" style={{ color: "#808080" }}>
              <img
                src="./images/add.svg"
                alt=""
                onClick={() => setVal3(val3 + 1)}
              />
              <label className="m-3">{val3}</label>{" "}
              <img
                src="./images/sub.svg"
                alt=""
                onClick={() => setVal3(val3 - 1)}
              />
            </div>
          </div>
        </div>
        <Link to="/citySelect">
          <p>❰ Back to City</p>
        </Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  margin-top: 8rem;
`;
