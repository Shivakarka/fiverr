import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-backend-alpha.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
