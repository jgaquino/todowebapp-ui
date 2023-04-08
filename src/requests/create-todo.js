import handleResponse from "./_handleResponse";
const ENDPOINT = "http://localhost:3000/todos/create";

const createTodo = async (newTodo) => {
  return await new Promise((resolve) => {
    const hr = handleResponse(resolve);

    fetch(ENDPOINT, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(newTodo),
    })
      .then(hr.processRequest)
      .catch(hr.processError);
  });
};

export default createTodo;
