import handleResponse from "./_handleResponse";
const ENDPOINT = "http://localhost:4000/todos/mark-completed";

const markCompleted = async (id) => {
  return await new Promise((resolve) => {
    const hr = handleResponse(resolve);

    fetch(`${ENDPOINT}/${id}`, {
      method: "PATCH",
    })
      .then(hr.processRequest)
      .catch(hr.processError);
  });
};

export default markCompleted;
