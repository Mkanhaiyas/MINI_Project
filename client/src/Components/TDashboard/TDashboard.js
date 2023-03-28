import { useEffect } from "react";
import "./TDashboard.css";
import MainDash from "./MainDash/MainDash";
import RightSide from "./RightSide/RightSide";
import Sidebar from "./Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
const api = process.env.REACT_APP_LINK;

function TDashboard() {
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
        <MainDash dashname="Teacher's" tablehead="Student List" />
        <RightSide />
      </div>
    </div>
  );
}

export default TDashboard;
