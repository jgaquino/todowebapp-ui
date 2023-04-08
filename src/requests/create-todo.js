import axios from "axios";
import handleResponse from "./_handleResponse";
const ENDPOINT = "http://localhost:4000/todos/create";

const createTodo = async (newTodo) => {
  return await new Promise((resolve) => {
    const hr = handleResponse(resolve);

    axios.put(ENDPOINT, newTodo).then(hr.processRequest).catch(hr.processError);
  });
};

export default createTodo;
