import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../TDashboard/Sidebar/Sidebar";
const api = process.env.REACT_APP_LINK;

function SChat() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    teacher: "",
    message: "",
  });

  const [newdata, setnewdata] = useState([]);

  const response = async () => {
    const data = await (await fetch(`${api}/message/`)).json();
    //const Token = localStorage.getItem("token");
    //const currentUser = data.filter((res) => res.id_2 === Token).ToList();
    // const uniqueData = data.filter(
    //   (res) => res.profession === currentProfession
    // );
    setnewdata(data.reverse());
  };

  //const individualData = data.find((result) => result.profession === "teacher");
  //console.log(individualData);
  React.useEffect(() => {
    response();
  });
  const [user, setuser] = useState([]);
  const Verify = async () => {
    const Token = localStorage.getItem("token");
    const response = await (await fetch(`${api}/posts/`)).json();
    const data = response.find((res) => res._id === Token);
    const uniqueData = response.filter((res) => res.profession === "teacher");
    setuser(uniqueData);
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

  const sendMessage = async (e) => {
    e.preventDefault();
    const Token = localStorage.getItem("token");
    const response = await fetch(`${api}/message/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_1: data.teacher,
        id_2: Token,
        message: data.message,
      }),
    })
      .then((response) => {
        console.log(response.json());
        alert("Messsage sent Successfully");
      })
      .catch((error) => console.log(error));
    console.log(response.json());
  };
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
            <h1>Message</h1>
          </div>
          <div>
            <select
              value={data.teacher}
              onChange={(e) => setdata({ ...data, teacher: e.target.value })}
            >
              <option>Choose Teacher</option>
              {user.map((row, index) => (
                <option value={row._id}>
                  {index + 1 + ". "}
                  {row.firstname}
                </option>
              ))}
            </select>
            <input
              type="Text"
              placeholder="Message..."
              required
              value={data.message}
              onChange={(e) => setdata({ ...data, message: e.target.value })}
            />
            <button type="submit" className="submitbtn" onClick={sendMessage}>
              Send
            </button>
          </div>
          <br />
          <h2> Messages List</h2>
          {newdata.slice(0, 7).map((row) => (
            <div>{row.message}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SChat;
