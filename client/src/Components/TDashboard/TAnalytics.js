import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
const api = process.env.REACT_APP_LINK;

function TAnalytics() {
  const navigate = useNavigate();
  const Verify = async () => {
    const Token = localStorage.getItem("token");
    const response = await (await fetch(`${api}/posts/`)).json();
    const data = response.find((res) => res._id === Token);
    if (!Token) {
      navigate("/login");
    }
    if (data.profession === "student") {
      navigate("/login");
    }
  };
  useEffect(() => {
    Verify();
  });
  return (
    <div className="Dash">
      <div className="DashGlass">
        <Sidebar
          dashboard="/TDashboard"
          student="/TStudent"
          changeSHead="Students"
          assignment="/TAssignment"
          chat="/TChat"
          analytics="/TAnalytics"
        />
      </div>
    </div>
  );
}

export default TAnalytics;
