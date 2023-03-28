import React from "react";
import Cards from "./Cards/Cards";
import Table from "./Table/Table";
import "./MainDash.css";
const MainDash = ({ dashname, tablehead }) => {
  return (
    <div className="MainDash">
      <h1>
        {dashname}
        <br /> Dashboard
      </h1>
      <Cards />
      <Table header={tablehead} Index={5} Size={0.5} />
    </div>
  );
};

export default MainDash;
