// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    LinkAdd: "/TDashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Assignment",
    LinkAdd: "/Assignment",
  },
  {
    icon: UilUsersAlt,
    heading: "Students",
    LinkAdd: "/Student",
  },
  {
    icon: UilPackage,
    heading: "Help",
    LinkAdd: "/Help",
  },
  {
    icon: UilChart,
    heading: "Analytics",
    LinkAdd: "/Analytics",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Task",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 50,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Task",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Rating",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Rating",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Daily Active",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Daily Active",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Kanhaiya",
    noti: "has completed 1st Assignment.",
    time: "25 minutes ago",
  },
  {
    img: img2,
    name: "Aryan",
    noti: "has submited all the Experiment.",
    time: "30 minutes ago",
  },
  {
    img: img1,
    name: "Kanhaiya",
    noti: "has submited 4 Experiment.",
    time: "2 hours ago",
  },
];
