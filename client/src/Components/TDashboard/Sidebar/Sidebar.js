import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/profile.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
// import { SidebarData } from "../Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { BubbleChart } from "@material-ui/icons";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  // UilPackage,
  // UilChart,
  // UilBubbleChart,
} from "@iconscout/react-unicons";

const Sidebar = ({ dashboard, student, changeSHead, assignment, chat }) => {
  const [expanded, setExpaned] = useState(true);
  const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
      LinkAdd: `${dashboard}`,
    },
    {
      icon: UilClipboardAlt,
      heading: "Assignment",
      LinkAdd: `${assignment}`,
    },
    {
      icon: UilUsersAlt,
      heading: `${changeSHead}`,
      LinkAdd: `${student}`,
    },
    {
      icon: BubbleChart,
      heading: "Chat",
      LinkAdd: `${chat}`,
    },
  ];

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  // console.log(window.innerWidth);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "menuItem active" : "menuItem"
                }
                key={index}
                to={item.LinkAdd}
              >
                <item.icon />
                <span>{item.heading}</span>
              </NavLink>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt onClick={logout} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
