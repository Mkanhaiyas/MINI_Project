import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Menubar from "./Components/Home/Menubar";
import Header from "./Components/Home/Header";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import TDashboard from "./Components/TDashboard/TDashboard";
import SDashboard from "./Components/SDashboard/SDashboard";
import TStudent from "./Components/TDashboard/TStudent";
import STeacher from "./Components/SDashboard/STeacher";
import SAssignment from "./Components/SDashboard/SAssignment";
import SAnalytics from "./Components/SDashboard/SAnalytics";
import SChat from "./Components/SDashboard/SChat";
import TAssignment from "./Components/TDashboard/TAssignment";
import TAnalytics from "./Components/TDashboard/TAnalytics";
import TChat from "./Components/TDashboard/TChat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SDashboard" element={<SDashboard />} />
        <Route path="/TDashboard" element={<TDashboard />} />
        <Route path="/TStudent" element={<TStudent />} />
        <Route path="/STeacher" element={<STeacher />} />
        <Route path="/SAssignment" element={<SAssignment />} />
        <Route path="/SAnalytics" element={<SAnalytics />} />
        <Route path="/SChat" element={<SChat />} />
        <Route path="/TAssignment" element={<TAssignment />} />
        <Route path="/TAnalytics" element={<TAnalytics />} />
        <Route path="/TChat" element={<TChat />} />
      </Routes>
      <Menubar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
