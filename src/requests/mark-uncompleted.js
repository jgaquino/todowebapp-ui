import handleResponse from "./_handleResponse";
const ENDPOINT = "http://localhost:4000/todos/mark-uncompleted";

const markUncompleted = async (id) => {
  return await new Promise((resolve) => {
    const hr = handleResponse(resolve);

    fetch(`${ENDPOINT}/${id}`, {
      method: "PATCH",
    })
      .then(hr.processRequest)
      .catch(hr.processError);
  });
};

export default markUncompleted;
