import handleResponse from "./_handleResponse";
const ENDPOINT = "http://localhost:4000/todos/delete";

const deleteTodo = async (id) => {
  return await new Promise((resolve) => {
    const hr = handleResponse(resolve);

    fetch(`${ENDPOINT}/${id}`, { method: "DELETE" })
      .then(hr.processRequest)
      .catch(hr.processError);
  });
};

export default deleteTodo;
