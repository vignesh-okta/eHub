import axios from "axios";
import AuthContext from "../../../Utility/AuthProvider";
import "./Login.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let baseURL = "http://localhost:8081/login";
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const reqbody = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(baseURL, reqbody);

      console.log(response.data);
      //   const cookies = cookie.parse(response.headers["set-cookie"][0]);
      //   console.log(cookies);
      setRedirect(true);
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  if (redirect) {
    navigate("/");
  }

  return (
    <div className="card">
      <h1>Welcome Back!</h1>
      <h3>Enter Login Details</h3>
      <form className="card__form" onSubmit={handleLogin}>
        <div className="card__wrapper">
          <label className="card__label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="card__input"
            required
          />
        </div>
        <div className="card__wrapper">
          <label className="card__label">Password</label>

          <input
            type="password"
            name="password"
            id="password"
            className="card__input"
            required
          />
        </div>
        <button className="card__button" name="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
