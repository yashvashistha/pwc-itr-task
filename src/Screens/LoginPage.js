import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import APIs from "../Utils/APIfile";

function LoginPage() {
  const nav = useNavigate();
  const [getpass, setGetPass] = useState(false);
  const [logindata, setLoginData] = useState({
    eId: "",
    pswd: "",
  });
  const [email, setEmail] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...logindata, [name]: value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Get Password Submit Handler
  const submitGetPasswordHandler = () => {
    if (!email) {
      toast.error("Enter Email!", {
        progress: 0,
        progressStyle: { background: "rgba(229, 184, 185, 1)" },
      });
      return;
    }
    const APIdata = JSON.stringify({
      Email: email,
    });
    // console.log(APIdata);
    const ForgetPasswordapi = APIs.ForgetPasswordAPI;
    var config = {
      method: ForgetPasswordapi.method,
      maxBodyLength: Infinity,
      url: ForgetPasswordapi.url,
      headers: ForgetPasswordapi.headers,
      data: APIdata,
    };
    axios
      .request(config)
      .then((response) => {
        toast.success("OTP Sent Successfull!", {
          progress: 0,
          progressStyle: { background: "rgba(229, 184, 185, 1)" },
        });
        setGetPass(false);
        nav(`/setnewpassword/${email}`);
      })
      .catch((error) => {
        toast.error("Please Submit Again!", {
          progress: 0,
          progressStyle: { background: "rgba(229, 184, 185, 1)" },
        });
      });
  };

  // Login submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (true) {
      toast.success("Welcome to PWC!", {
        progress: 0,
        progressStyle: { background: "rgba(229, 184, 185, 1)" },
      });
      localStorage.setItem("idToken", logindata.pswd);
      nav("/");
    } else {
      toast.warn("Wrong Id Password!", {
        progress: 0,
        progressStyle: { background: "rgba(229, 184, 185, 1)" },
      });
    }
    // const APIdata = JSON.stringify(logindata);
    // console.log(APIdata);
    // const Loginapi = APIs.LoginAPI;
    // var config = {
    //   method: Loginapi.method,
    //   maxBodyLength: Infinity,
    //   url: Loginapi.url,
    //   headers: Loginapi.headers,
    //   data: APIdata,
    // };
    // axios
    //   .request(config)
    //   .then((response) => {
    //     toast.success("Welcome to Mobifly!", {
    //       progress: 0,
    //       progressStyle: { background: "rgba(255, 222, 190, 1)" },
    //     });
    //     localStorage.setItem("idToken", response.idToken);
    //     nav("/");
    //   })
    //   .catch((error) => {
    //     toast.warn("Wrong Id Password!", {
    //       progress: 0,
    //       progressStyle: { background: "rgba(255, 222, 190, 1)" },
    //     });
    //   });
  };

  return (
    <div className="Login">
      <div className="Section-1">
        <div
          style={{
            // backgroundColor: "yellow",
            width: "min(316px, 90%)",
            height: "min(174px, 90%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Helvetica",
            gap: "max(5%, 10px)",
          }}
        >
          <img
            src="Icons/pwclargeicon.png"
            alt="PWC Icon"
            // style={{ flex: 2 }}
          />
          <p>Navigate PDF Parser</p>
          <p>Effective. Comprehensive. Flexible</p>
        </div>
      </div>
      <div className="Section-2">
        <div
          style={{
            maxWidth: "445px",
            width: "95%",
            maxHeight: "366px",
            height: "90%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              maxWidth: "383px",
              width: "95%",
              maxHeight: "277px",
              height: "90%",
              //   backgroundColor: "yellow",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "18px",
                width: "90%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "row",
                  cursor: "pointer",
                }}
                onClick={() => {
                  // Login Component
                }}
              >
                <img
                  src="Icons/bxs_lock.png"
                  alt="lock icon"
                  // style={{ width: "17px", height: "17px" }}
                />
                <p style={{ fontSize: "16px", lineHeight: "14px" }}>Login</p>
              </div>
              <hr />
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "row",
                  cursor: "pointer",
                }}
                onClick={() => {
                  // Signup Component
                  nav("/signup");
                }}
              >
                <p
                  style={{
                    position: "relative",
                    left: "10%",
                    fontSize: "16px",
                    lineHeight: "14px",
                  }}
                >
                  Signup
                </p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                maxHeight: "226px",
                height: "90%",
                // backgroundColor: "lightblue",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <input
                type="username"
                placeholder="  Leave Emoty"
                name="eId"
                value={logindata.Username}
                onChange={handleInputChange}
                style={{
                  height: "50px",
                  border: "1px solid black",
                }}
              />
              <input
                type="text"
                placeholder="  Enter IdToken"
                name="pswd"
                value={logindata.Password}
                onChange={handleInputChange}
                style={{
                  height: "50px",
                  border: "1px solid black",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "36px",
                }}
              >
                <button
                  style={{
                    width: "108px",
                    height: "36px",
                    // backgroundColor: "rgba(208, 74, 2, 1)",
                    backgroundColor: "rgba(217, 57, 84, 1)",
                    color: "white",
                    fontSize: "16px",
                    fontFamily: "Arial",
                    fontWeight: "700",
                    borderStyle: "none",
                    cursor: "pointer",
                  }}
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "13.8px",
                    color: "rgba(217, 57, 84, 1)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setGetPass(true);
                    // nav("/forgetpassword");
                  }}
                >
                  Get Password
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "16px",
                  width: "222px",
                  fontSize: "11px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                  lineHeight: "12.65px",
                  // color: "rgba(208, 74, 2, 1)",
                  color: "rgba(217, 57, 84, 1)",
                }}
              >
                <p style={{ cursor: "default" }}>Cookie Information</p>
                <hr />
                <p style={{ cursor: "default" }}>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hidden Get Password Component */}
      <div
        className="popup-container"
        style={{
          display: getpass ? "flex" : "none",
          width: "383px",
          height: "230px",
          minHeight: "30%",
          minWidth: "35%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "10%",
            width: "100%",
            minHeight: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(217, 57, 84, 1)",
          }}
        >
          <p>Get Password</p>
          <button
            style={{
              position: "absolute",
              right: "5px",
              backgroundColor: "transparent",
              borderStyle: "none",
              top: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              setGetPass(false);
            }}
          >
            X
          </button>
        </div>
        <div
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <input
            type="username"
            placeholder="  Username"
            name="eId"
            value={email}
            onChange={handleEmailChange}
            style={{
              width: "90%",
              height: "50px",
              border: "1px solid black",
            }}
          />
          <button
            style={{
              width: "108px",
              height: "36px",
              backgroundColor: "rgba(217, 57, 84, 1)",
              color: "white",
              fontSize: "16px",
              fontFamily: "Arial",
              fontWeight: "700",
              borderStyle: "none",
              cursor: "pointer",
            }}
            onClick={submitGetPasswordHandler}
          >
            Get OTP
          </button>
        </div>
      </div>
      {/* Hidden Get Password Component */}
    </div>
  );
}

export default LoginPage;
