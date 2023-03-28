import { useEffect } from "react";
import "./SDashboard.css";
import { useNavigate } from "react-router";
import MainDash from "../TDashboard/MainDash/MainDash";
import RightSide from "../TDashboard/RightSide/RightSide";
import Sidebar from "../TDashboard/Sidebar/Sidebar";
const api = process.env.REACT_APP_LINK;

function SDashboard() {
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
        <MainDash dashname="Student's" tablehead="Teacher List" />
        <RightSide />
      </div>
    </div>
  );
}

export default SDashboard;
