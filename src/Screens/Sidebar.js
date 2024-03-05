import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const nav = useNavigate();
  const [btnhook, setBtnHook] = useState(false);

  return (
    <div className="Sidebar">
      <p>V1.0</p>
      <div className="ComponentBtn">
        <img
          src="/Icons/sidebtn.png"
          alt="Side Button"
          width="24px"
          height="24px"
          // style={{ position: "fixed", left: "2px" }}
        />
        <div>
          <button
            style={{
              backgroundColor: btnhook ? "rgba(217, 57, 84, 1)" : "white",
              cursor: "pointer",
            }}
            onClick={() => {
              if (pathname !== "/chat") {
                nav("/chat");
                setBtnHook(!btnhook);
              }
            }}
          >
            <img
              src={
                btnhook ? "/Icons/commenticon2.png" : "/Icons/commenticon1.png"
              }
            />
          </button>
          <button
            style={{
              backgroundColor: btnhook ? "white" : "rgba(217, 57, 84, 1)",
              cursor: "pointer",
            }}
            onClick={() => {
              if (pathname !== "/") {
                nav("/");
                setBtnHook(!btnhook);
              }
            }}
          >
            <img
              src={
                btnhook
                  ? "/Icons/sideuploadicon2.png"
                  : "/Icons/sideuploadicon1.png"
              }
            />
          </button>
          <button
            style={{ backgroundColor: "white", cursor: "pointer" }}
            onClick={() => {
              if (pathname !== "/login") {
                localStorage.removeItem("idToken");
                setTimeout(() => {
                  nav("/login");
                }, 600);
              }
            }}
          >
            <img src="/Icons/logouticon.png" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
