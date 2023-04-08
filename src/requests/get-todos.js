import handleResponse from "./_handleResponse";
const ENDPOINT = "http://localhost:3000/todos";

const getTodos = async () => {
  return await new Promise((resolve) => {
    const hr = handleResponse(resolve);

    fetch(ENDPOINT, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then(hr.processRequest)
      .catch(hr.processError);
  });
};

export default getTodos;
