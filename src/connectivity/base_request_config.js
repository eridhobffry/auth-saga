import _ from "lodash";
import { loadState } from "./local_storage";

export const getBaseRequestConfig = () => {
  const state = loadState();
  const config = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (state && _.has(state, "auth.token")) {
    config.headers.Authorization = `Bearer ${state.auth.token}`;
  }

  return config;
};
