import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {
  const nav = useNavigate();
  const signinurl =
    "https://api.qa.einvoice.aw.navigatetax.pwc.co.in/qa/auth/signin";
  const [logindata, setLoginData] = useState({
    eId: "",
    pswd: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...logindata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      true
      // logindata.eId === "rakesh.ramnani@mobifly.in" &&
      // logindata.pswd === "Rakesh@11"
    ) {
      localStorage.setItem(
        "idToken",
        "eyJraWQiOiJlNjdLV204TEJESzJQcUpBdUwwUjR2N1E0VmlCb2daaUNzWlRzZVE4NWkwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5Yjg5OTdkNC1lY2FlLTQ4NjQtOGVjOC1kNWYwZDFhOTFmYTIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV84S3dOaUxnWG4iLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiOWI4OTk3ZDQtZWNhZS00ODY0LThlYzgtZDVmMGQxYTkxZmEyIiwiYXVkIjoiZzEzdjE5ZThmNDdwczZucW9lOW1sOXMwZyIsImN1c3RvbTpjdXN0b21lcklkIjoiMTIzNDU2IiwiZXZlbnRfaWQiOiIxY2QwMjU4Ni1kOWQ5LTQzOTItOTdkZC02ZjU2MGZlZTk4ZjYiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTcwODA4Njg0MywibmFtZSI6IlJha2VzaFJSTiIsInBob25lX251bWJlciI6Iis5MTk5OTg4NzA3ODQiLCJleHAiOjE3MDgwOTA0NDMsImlhdCI6MTcwODA4Njg0MywiY3VzdG9tOmVudmlyb25tZW50IjoiZGV2IiwiZW1haWwiOiJyYWtlc2gucmFtbmFuaUBtb2JpZmx5LmluIn0.MXXwYBuSi8yA6vlsl8hJe2xfUGo4B5jWeCBdNx3cfY52mwHFvBeoIl3PtT30S4LF8Z2TuoQHzypbhIaDCUrlt6wuLTTAWDoi9ya9EQKNqMVzjvdUFVkjHnmQtUK2O182TWiIXqhD-IRBifavtWy2rLZfA2Zg0nHL1lmDxE2GdN_BxGqSSlXaMHcSpzwd2b49XPdPdn8f78Ch5hdwl_zqXWmV_cN8yCvu4M_HEQMp9oDVvGSnbqnIfGlEyyofEeEWn_mlSX2G4ynnV-hM9HmtuwHShZ-eNBGPHjW4P1KJDRt0Am7-ZUnx9mFmXf4N-izdWsNW6lHJQXvsyrS_jp_baQ"
      );
      nav("/");
    } else {
      alert("Wrong Id Password");
    }
    // console.log(JSON.stringify(logindata));
    // var config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: signinurl,
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-api-key": "jUlXbxDSESrSJwI3Movt6VYIXfCAEAf1ozsltuWf",
    //   },
    //   data: JSON.stringify(logindata),
    // };
    // axios
    //   .request(config)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
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
                width: "62px",
                height: "18px",
              }}
            >
              <img
                src="Icons/bxs_lock.png"
                alt="lock icon"
                style={{ width: "17px", height: "17px" }}
              />
              <p style={{ fontSize: "16px", lineHeight: "14px" }}>Login</p>
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
                placeholder="  Username"
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
                placeholder="  Password"
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
                    // color: "rgba(208, 74, 2, 1)",
                    color: "rgba(217, 57, 84, 1)",
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
                <p>Cookie Information</p>
                <hr />
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;