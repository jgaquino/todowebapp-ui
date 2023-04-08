const handleResponse = (resolve, visibleResponse) => {
  return {
    processRequest: async (res) => {
      const apiResponse = await res.json();
      if (visibleResponse) alert(visibleResponse);
      console.log(
        `[${res.url}] handle response component output: `,
        apiResponse
      );
      return resolve(apiResponse);
    },
    processError: async (error) => {
      console.log(
        "handle response component output: ",
        error.message,
        error.status
      );
      return resolve(false);
    },
  };
};

export default handleResponse;
