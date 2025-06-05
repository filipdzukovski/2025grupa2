import { api } from "./../config/properties";
import axios from "axios";

export const getPosts = async (token) => {
  try {
    const header = {
        "Content-Type":'application/json',
        "Authorization": "Bearer " + token
    }
    const res = await axios.get(`${api.localRoute}/posts`,{headers:header});
    return await Promise.resolve(res.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};
