import { GET_INPUT } from "./inputAction";

const initState = {
  text: "",
};
export const inputReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_INPUT:
      return { text: payload };
    default:
      return state;
  }
};
