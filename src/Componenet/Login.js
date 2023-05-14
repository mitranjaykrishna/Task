import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "styled-components";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, facebookSignIn } = useUserAuth();
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      
      navigate("/citySelect");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/citySelect");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/citySelect");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Wrapper>
      <div className="mainLogin">
        <div className="container  ">
          <div className="row">
            <div className="col-sm">
              <img src="./images/loginImage.svg" alt="loginImage" />
            </div>
            <div className="col-4 ">
              <div className="container ">
                <div className="row gy-7">
                  <h1 className="">Login here!</h1>
                </div>
                <div className="row gy-7">
                  <div style={{ width: "25rem" }}>
                    {error && <Alert variant="danger">{error}</Alert>}
                  </div>
                  <Form
                    onSubmit={handleSubmit}
                    className="row gy-3 d-flex justify-content-center"
                  >
                    <Form.Group
                      className="row gy-2 "
                      style={{ "zIndex": "10" }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Username or Phone"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      className="row gy-2"
                      style={{ "zIndex": "10" }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <div className="row gy-1" style={{ "zIndex": "10" }}>
                      <p className="text-end">Forgot Password?</p>
                    </div>
                    <div className="row gy-0 d-flex justify-content-centers ">
                      <Button
                        variant="contained"
                        className="buttonClass hover-overlay hover-zoom hover-shadow ripple  "
                        type="submit"
                      >
                        Login
                      </Button>
                    </div>
                  </Form>

                  <div className="row gy-4" style={{ "zIndex": "10" }}>
                    <hr className="mt-0 mb-5" />
                  </div>
                  <div className="row " style={{ "zIndex": "10" }}>
                    <div className="col d-flex justify-content-end ">
                      <Button variant="outlined" className="buttonIcon hover-overlay hover-zoom hover-shadow ripple  ">
                        <img
                          src="./images/google.png"
                          className="btn appIcon"
                          alt=""
                          onClick={handleGoogleSignIn}
                        />
                      </Button>
                    </div>
                    <div className="col d-flex justify-content-start">
                      <Button variant="outlined" className="buttonIcon hover-overlay hover-zoom hover-shadow ripple  ">
                        <img
                          src="./images/facebook.png"
                          className="btn appIcon"
                          alt=""
                          onClick={handleFacebookSignIn}
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./images/loginBottom1.svg"
            className="loginBottom1"
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 8rem;

  .loginBottom1 {
    position: absolute;
    width: 1492.21px;
    height: 500.17px;
    top: 365.27px;
  }

  .buttonClass {
    z-index: 10;
    background: linear-gradient(98.44deg, #f54874 52.42%, #ec008c 107.37%);
    width: 330px;
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 34px;
  }
  .buttonIcon {
    z-index: 10;
    border-radius: 100%;
    height: 50px;
    width: 15px;
    background: #ece9ec;
    border: 0.4px solid #f89aee;
  }

  .appIcon {
    z-index: 50;
    color: black;
    height: 50px;
    width: 70px;
    border-radius: 100%;
  }
`;
export default Login;
