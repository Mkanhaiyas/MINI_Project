import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import BasicTable from "./MainDash/Table/Table";
const api = process.env.REACT_APP_LINK;

function TStudent() {
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
        <div className="Stud-Mainbody">
          <div className="Mainbody-head">
            <h1>Student List</h1>
          </div>
          <div className="Mainbody-table">
            <BasicTable header={null} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TStudent;
