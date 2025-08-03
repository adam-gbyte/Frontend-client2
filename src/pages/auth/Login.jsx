/*
File: src/components/LoginForm.jsx
*/
import { useState, useEffect } from "react";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthLayout from "../../components/AuthLayout";

import "./Login.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const apiUrl = import.meta.env.VITE_URL_API;
      const response = await axios.post(`${apiUrl}/auth/login`, form, {
        withCredentials: true,
      });

      const { token } = response.data;
      console.log("Login successful", token);

      // Simpan ke localStorage
      localStorage.setItem("token", token);
      //   navigate("/");
      //   window.location.reload();
    } catch (err) {
      console.error("Login error:", err.response?.data);
      setError(err.response?.data);
    }
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <AuthLayout title="Masuk ke Akun">
      {/* {error.global && <p className="error-message">{error.global}</p>} */}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <User className="input-icon" size={20} />
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="input-field"
            required
          />
          {/* {error.errorUsername && (
            <p className="error-text">{error.errorUsername}</p>
          )} */}
        </div>

        <div className="input-group">
          <Lock className="input-icon" size={20} />
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="input-field"
            required
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="toggle-button"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {/* {error.errorPassword && (
            <p className="error-text">{error.errorPassword}</p>
          )} */}
        </div>

        <button type="submit" className="submit-button">
          Masuk
        </button>

        <p className="form-footer">
          Belum punya akun?{" "}
          <span className="link" onClick={() => navigate("/register")}>
            Daftar
          </span>
        </p>
      </form>
    </AuthLayout>
  );
}
