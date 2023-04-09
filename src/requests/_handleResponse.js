const handleResponse = (resolve, visibleResponse) => {
  return {
    processRequest: async (res) => {
      if (res.status === 403) return;
      if (visibleResponse) alert(visibleResponse);
      if (res.data.error) throw new Error(res.data.error);
      console.info(
        `[${res.config.url}] handle response component output: `,
        res.data
      );
      return resolve(res.data);
    },
    processError: async (error) => {
      if (error.response) {
        console.error(
          "handle response component output: ",
          error.response.data.error,
          error.response.status
        );
      }
      if (error.message) {
        console.error("handle response component output: ", error.message);
      }

      return resolve(false);
    },
  };
};

export default handleResponse;
