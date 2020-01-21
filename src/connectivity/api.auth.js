import { getBaseRequestConfig } from "./base_request_config";
import asyncFetch from "./async_fetch";

export async function login(username, password) {
  // API_BASE_URL
  const LOGIN_ENDPOINT = process.env.REACT_APP_API_URL_LOGIN;

  const baseRequestConfig = getBaseRequestConfig();

  const requestConfig = Object.assign({}, baseRequestConfig, {
    method: "POST",
    body: JSON.stringify({
      username,
      password
    })
  });

  const response = await asyncFetch(LOGIN_ENDPOINT, requestConfig);

  return await response.json();
}
