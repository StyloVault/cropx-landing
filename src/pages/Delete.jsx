import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Delete = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [border, setBorder] = useState("green");
  const navigate = useNavigate();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setError("Required*");
      setBorder("red");
    } else if (!validateEmail(e.target.value)) {
      setError("Invalid Email*");
      setBorder("red");
    } else {
      setError("");
      setBorder("green");
    }
  };
  const handleSubmit = () => {
    if (validateEmail(email)) {
      toast.success("Account deleted");
      navigate("/");
    }
  };
  return (
    <div className="flex w-full flex-col gap-[40px] items-center justify-center px-[20px]">
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-[40px] py-[40px]">
        <div className="flex flex-col items-center mt-[60px]">
          <span className="text-[36px] font-[600] text-center mt">
            Delete My Account
          </span>
          <span className="text-slate-600 text-[12px] text-center max-w-[400px]">
            By entering you email and clicking the 'Delete My Account', you
            concent that your account with be deleted and all services will be
            withdrawn.
          </span>
        </div>

        <div className="flex flex-col max-w-[400px] gap-[20px] z-[9999] w-full">
          <div className="flex flex-col">
            <input
              type="text"
              style={{ outline: "1px solid " + border }}
              className={`h-[40px] border bg-[#fff] rounded-[10px] px-[20px] outline-[${border}]`}
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <span className="text-[12px] text-red-600">{error}</span>
          </div>
          <span
            onClick={handleSubmit}
            style={{
              background: validateEmail(email) ? "red" : "grey",
              cursor: validateEmail(email) ? "pointer" : "not-allowed",
            }}
            className="h-[45px] rounded-[10px] flex justify-center text-[#fff] items-center border"
          >
            Delete My Account
          </span>
        </div>
      </div>
    </div>
  );
};

export default Delete;
