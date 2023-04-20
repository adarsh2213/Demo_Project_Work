import React, { useState } from "react";

function Registration() {
  const [usename, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const hendalSign = (e) => {
    e.preventDefault();
 
    let item = { usename , email, password };
    console.log(item);
  };

  return (
    <>
      <style>{"body { background-color: #096d79; }"}</style>
      <div className="loginMain ">
        <div className="container my-3  loginn">
          <form className=" shadow p-3 bg-body-tertiary rounded mt-5">
            <h3> Sign Up Here </h3>
            <div className=" ms-5 mt-3 col-md-9">
              <label htmlFor="exampleInputEmail1" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control imput"
                name="Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={usename}
              />
            </div>

            <div className=" ms-5 mt-3 col-md-9">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control imput"
             
                aria-describedby="emailHelp"
                name="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className=" ms-5 mt-3 col-md-9">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control imput"
               
                name="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}  
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mx-2  ms-5 mt-3"
              onClick={hendalSign}
            >
             Reigestr
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
