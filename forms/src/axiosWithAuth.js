import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    baseURL: "http://localhost:5000/api"
  });
};

export default axiosWithAuth;

//axiosWithAuth().post("/register", values).then(res=> setInitialToken(res.data.token))