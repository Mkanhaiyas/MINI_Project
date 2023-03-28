import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const api = process.env.REACT_APP_LINK;

export default function Login() {
  const [btn1Status, setbtn1Status] = useState(false);
  const [btn2Status, setbtn2Status] = useState(true);
  const [user, setuser] = useState([]);
  const [data, setdata] = useState({
    profession: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [logdata, setlogdata] = useState({
    profession: "",
    email: "",
    password: "",
  });

  const createPost = async (data) => {
    const response = await fetch(`${api}/posts/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    return console.log(await response.json());
  };

  const clearData = () => {
    setdata({
      profession: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  const clearLogdata = () => {
    setlogdata({
      profession: "",
      email: "",
      password: "",
    });
  };

  const getuser = async () => {
    const response = await (await fetch(`${api}/posts/`)).json();
    setuser(response);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    try {
      if ((data.firstname, data.lastname, data.email, data.password !== "")) {
        createPost(data);
        alert(`${data.firstname} you are Successfully Registered`);
        clearData();
      }
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  const navigate = useNavigate();
  const logsubmit = (e) => {
    e.preventDefault();

    const logapi = async (data) => {
      const response = await fetch(`${api}/logdata/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const Userdata = await response.json();
      if (Userdata.User) {
        localStorage.setItem("token", Userdata.User);
        const Token = localStorage.getItem("token");
        if (Token) {
          const loginUser = user.find((data) => data._id === Token);
          if (!loginUser) {
            localStorage.removeItem("token");
            navigate("/login");
          } else {
            alert("Login Successfully");
            if (loginUser.profession === "student") {
              navigate("/SDashboard");
            }
            if (loginUser.profession === "teacher") {
              navigate("/TDashboard");
            }
            // if (loginUser.profession === "admin") {
            //  navigate("/SDashboard");
            // }
          }
          console.log(loginUser);
        }
      } else {
        alert("Invalid Information");
        localStorage.removeItem("token");
      }
    };

    logapi(logdata);

    // try {
    //   const unique = user.find(
    //     (person) =>
    //       person.profession === logdata.profession &&
    //       person.email === logdata.email &&
    //       person.password === logdata.password
    //   );
    //   console.log(unique);
    //   if (unique) {
    //     alert(`Login successfully`);
    //     if (logdata.profession === "teacher") {
    //       navigate("/TDashboard");
    //     }
    //     if (logdata.profession === "student") {
    //       navigate("/SDashboard");
    //     }
    //   } else alert(`Please Register first`);
    //   clearLogdata();
    // } catch (error) {
    //   console.log({ message: error.message });
    // }
  };

  useEffect(() => {
    getuser();
  }, []);
  // console.log(
  //   user.find(
  //     (person) =>
  //       person.email === logdata.email && person.password === logdata.password
  //   )
  // );
  // user.map((currElement) => {
  //   //if (currElement.firstname === "Kanhaiya")
  //   return console.log(currElement._id);
  // });

  return (
    <section id="login">
      <div className="login">
        <div className="btn-box">
          <div className="void"></div>
          <button
            id="B1"
            onClick={() => {
              setbtn1Status(true);
              setbtn2Status(false);
            }}
            style={{ backgroundColor: btn1Status ? "" : "rgb(79, 28, 182)" }}
            className="Log btn"
          >
            Login
          </button>
          <button
            id="B2"
            onClick={() => {
              setbtn1Status(false);
              setbtn2Status(true);
            }}
            style={{ backgroundColor: btn2Status ? "" : "rgb(79, 28, 182)" }}
            className="Reg btn"
          >
            Register
          </button>
        </div>
        <form id="logform" style={{ display: btn1Status ? "block" : "none" }}>
          <select
            value={logdata.profession}
            onChange={(e) =>
              setlogdata({ ...logdata, profession: e.target.value })
            }
          >
            <option>Choose Profession</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="text"
            placeholder="Email Id"
            required
            value={logdata.email}
            onChange={(e) => setlogdata({ ...logdata, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={logdata.password}
            onChange={(e) =>
              setlogdata({ ...logdata, password: e.target.value })
            }
          />
          <button type="submit" className="submitbtn" onClick={logsubmit}>
            Login
          </button>
        </form>
        <form id="regform" style={{ display: btn2Status ? "block" : "none" }}>
          <select
            value={data.profession}
            onChange={(e) => setdata({ ...data, profession: e.target.value })}
          >
            <option>Choose Profession</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <input
            type="text"
            placeholder="First Name"
            value={data.firstname}
            required
            onChange={(e) => setdata({ ...data, firstname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={data.lastname}
            required
            onChange={(e) => setdata({ ...data, lastname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email Id"
            value={data.email}
            required="true"
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            required="true"
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />
          <button type="submit" className="submitbtn" onClick={onsubmit}>
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
