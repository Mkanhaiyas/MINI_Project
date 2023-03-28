import React, { useEffect } from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data";
const api = process.env.REACT_APP_LINK;

const Updates = () => {
  const getData = async () => {
    const MainData = await (await fetch(`${api}/posts/`)).json();
    const Message = await (await fetch(`${api}/message/`)).json();
    console.log(Message);
    console.log(Message.reverse());
  };
  useEffect(() => {
    getData();
  });
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <br />
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
