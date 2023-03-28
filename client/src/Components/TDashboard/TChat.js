import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
const api = process.env.REACT_APP_LINK;

function TChat() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    student: "",
    message: "",
  });

  const [user, setuser] = useState([]);
  const Verify = async () => {
    const Token = localStorage.getItem("token");
    const response = await (await fetch(`${api}/posts/`)).json();
    const data = response.find((res) => res._id === Token);
    const uniqueData = response.filter((res) => res.profession === "student");
    setuser(uniqueData);
    if (!Token) {
      navigate("/login");
    }
    if (data.profession === "student") {
      navigate("/login");
    }
  };

  useEffect(() => {
    Verify();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const Token = localStorage.getItem("token");
    const response = await fetch(`${api}/message/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_1: data.student,
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
          dashboard="/TDashboard"
          student="/TStudent"
          changeSHead="Students"
          assignment="/TAssignment"
          chat="/TChat"
          analytics="/TAnalytics"
        />
        <div className="Stud-Mainbody">
          <div className="Mainbody-head">
            <h1>Message</h1>
          </div>
          <div>
            <select
              value={data.student}
              onChange={(e) => setdata({ ...data, student: e.target.value })}
            >
              <option>Choose Student</option>
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
        </div>
      </div>
    </div>
  );
}

export default TChat;
