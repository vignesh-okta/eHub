import axios from "axios";
import "./Login.scss";

function Login() {
  let baseURL = "http://localhost:8081/login";
  const handleLogin = async (e) => {
    e.preventDefault();
    const reqbody = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const response = await axios.post(baseURL, reqbody);
      console.log(response.data);
    } catch (error) {
      console.log("Something went wrong");
    }
  };
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
