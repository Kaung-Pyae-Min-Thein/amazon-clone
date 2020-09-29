import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/amaozn-challenge/us-central1/api",
  //API cloud function URL
});
export default instance;