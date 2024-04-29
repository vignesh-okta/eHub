import Login from "../../../components/component/Login/Login";
import image from "../../../assets/images/andres.jpg";
import "./LoginPage.scss";
function LoginPage() {
  return (
    <div className="login">
      <div className="login__form">
        <Login />
      </div>
      <div className="login__image">
        <img src={image} alt="image" className="login__img"></img>
      </div>
    </div>
  );
}

export default LoginPage;
