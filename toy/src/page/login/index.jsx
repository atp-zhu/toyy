import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      alert("登录成功！");
      navigate("/");
    } else {
      alert("用户名或密码错误！");
    }
  };

  return <div className="login">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="sec">
        <span>请输入用户名：</span>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="sec">
        <span>请输入密码：</span>
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>;
};

export default Login;

