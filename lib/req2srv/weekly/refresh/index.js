import axios from "axios";

const errHandler = (err) => {
  let error = err.response.data || { message: err.response.status };
  alert(`${error.message}`);
  throw err;
};

const req2srv = {
  /**@type {(body:{userId: string})} */
  async readSchedule(body) {
    const result = await axios
      .post("/api/plan/read", body)
      .catch((err) => errHandler(err));
    return result.data;
  },
};

export default req2srv;
