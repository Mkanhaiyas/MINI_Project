import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../TDashboard/Sidebar/Sidebar";
import BasicTable from "../TDashboard/MainDash/Table/Table";
const api = process.env.REACT_APP_LINK;

function STeacher() {
  const navigate = useNavigate();
  const Verify = async () => {
    const Token = localStorage.getItem("token");
    const response = await (await fetch(`${api}/posts/`)).json();
    const data = response.find((res) => res._id === Token);
    if (!Token) {
      navigate("/login");
    }
    if (data.profession === "teacher") {
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
          dashboard="/SDashboard"
          student="/STeacher"
          changeSHead="Teachers"
          assignment="/SAssignment"
          chat="/SChat"
          analytics="/SAnalytics"
        />
        <div className="Stud-Mainbody">
          <div className="Mainbody-head">
            <h1>Teacher's List</h1>
          </div>
          <div className="Mainbody-table">
            <BasicTable header={null} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default STeacher;
