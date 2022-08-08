import React, { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function submitHandler(evt) {
    evt.preventDefault();
    console.log(JSON.stringify(user));
    fetch("//localhost:8000/auth", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          localStorage.setItem("email", `${user.email}`);
          alert("You logged in Successfully");
        } else {
          alert("You  username/password were entered incorrectly.");
        }
      })
      .catch((err) => {
        console.log(`Error:${err}`);
      });
  }

  const changeHandler = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    setUser((user) => ({ ...user, [name]: value }));
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler} noValidate autoComplete="off">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={user.email}
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={user.password}
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox"></div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
