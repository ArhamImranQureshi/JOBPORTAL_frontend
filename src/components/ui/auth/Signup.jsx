import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../label.jsx";
import { Input } from "../input.jsx";
import { RadioGroup } from "../radio-group.jsx";
import { Button } from "../button.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };
  const submitHandler = async (e) => {
    try{

    }catch(error){

    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 border-rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign up</h1>
          <div>
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="ex: Arham Qureshi"
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="ex: arham@gmail.com"
            />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              type="numbertext"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="1234567890"
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
                name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="*********"
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  onChange={changeEventHandler}
                  checked={input.role === "student"}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  onChange={changeEventHandler}
                  checked={input.role === "recruiter"}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                onChange={changeFileHandler}
                type="file"
                className="cursor-pointer"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">
            Sign up
          </Button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
