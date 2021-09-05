import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const exError =
    error.rsponse && error.response.staus >= 400 && error.response.staus < 500;

  if (!exError) {
    console.log("bruh", error);
    toast.error("Unexpected error");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
