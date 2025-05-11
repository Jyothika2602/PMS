import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "User",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Signup successful!");
    console.log("Signed up:", formData);
    navigate("/login");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Create an Account</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#111",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
  },
  form: {
    backgroundColor: "#222",
    padding: "2rem",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    color: "#fff",
    textAlign: "center",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #444",
    backgroundColor: "#333",
    color: "#fff",
  },
  button: {
    padding: "0.75rem",
    backgroundColor: "orange",
    border: "none",
    borderRadius: "8px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Signup;