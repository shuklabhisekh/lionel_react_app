import { createStore } from "redux";
import { inputReducer } from "./Input/inputReducer";

export const store = createStore(inputReducer);
