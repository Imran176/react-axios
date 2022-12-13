import axios from "axios";

const myAxiosAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default myAxiosAPI;
