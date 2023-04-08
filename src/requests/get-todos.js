import axios from "axios";
import handleResponse from "./_handleResponse";
const ENDPOINT = "http://localhost:4000/todos";

const getTodos = async () => {
  return await new Promise((resolve) => {
    const hr = handleResponse(resolve);

    axios.get(ENDPOINT).then(hr.processRequest).catch(hr.processError);
  });
};

export default getTodos;
