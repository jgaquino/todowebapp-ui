import axios from "axios";
import handleResponse from "./_handleResponse";
const ENDPOINT = "http://localhost:4000/todos/mark-uncompleted";

const markUncompleted = async (id) => {
  return await new Promise((resolve) => {
    const hr = handleResponse(resolve);

    axios
      .patch(`${ENDPOINT}/${id}`)
      .then(hr.processRequest)
      .catch(hr.processError);
  });
};

export default markUncompleted;
