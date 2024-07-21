import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const newHostel = async (data) =>
  await api.post("/api/hostels", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const IMAGE_URL = `http://localhost:8000/public`;
export const getHostels = async () => await api.get("/api/hostels");
export const getHostel = async (id) => await api.get(`/api/hostels/${id}`);

export const loginUser = async (data) =>
  await api.post("/api/auth/login", data);
export const registerUser = async (data) =>
  await api.post("/api/auth/register", data);
