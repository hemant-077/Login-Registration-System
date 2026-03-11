import axios from "axios";

const API = "http://localhost:8080/api/auth";

// Axios instance (clean + reusable)
const axiosInstance = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Register
export const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post("/register", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Registration failed";
  }
};

// 🔐 Login (JWT)
export const loginUser = async (data) => {
  try {
    const res = await axiosInstance.post("/login", data);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    // 👇 yahi main fix hai
    throw error.response?.data?.message || error.response?.data || "Login failed";
  }
};
