import { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data);
    }
  }

  return (
    <div className="login">
      <div className="image">
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/identification_perseus/standard.ddd97e5.png"
          alt="fiverr image"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="checkbox">
          <label htmlFor="check">Show Password</label>
          <input
            id="check"
            type="checkbox"
            value={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}
          />
        </div>
        <button type="submit">Login</button>
        {error && setTimeout(() => setError(null), 3000) && (
          <p className="login-error">{error.error}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
