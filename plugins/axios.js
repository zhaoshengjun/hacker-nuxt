import axios from "axios";

export default axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/",
  proxy: {
    host: "167.123.1.2",
    port: 8080,
    auth: {
      username: "",
      password: ""
    }
  }
});
