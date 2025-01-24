import React, { useState } from "react";
import Navbar, { Features } from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Delete from "./pages/Delete";
import {IoChevronDownCircle} from "react-icons/io5"
import { MdDelete } from "react-icons/md";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
      <Del />
    </Router>
  );
};

const Del = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex fixed right-[20px] z-[9999999] bottom-[50px]">
      <div className=" relative"></div>
      <span
        onClick={() => setToggle(!toggle)}
        className=" bg-red-200 relative rounded-[4px] p-1 z-[999999] cursor-pointer text-white "
      >
        <MdDelete className="text-[40px] text-red-600" />
      </span>
      {toggle && (
        <span
          onClick={() => {
            setToggle(!toggle);
            navigate("/delete");
          }}
          className=" text-red-600 cursor-pointer absolute top-[-30px] whitespace-nowrap right-0 border border-gray-300 shadow-md bg-[#e7e7e7] px-[12px] text-[14px] rounded-[20px]"
        >
          Delete My account
        </span>
      )}
    </div>
  );
};

export default App;
