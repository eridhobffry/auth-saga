import asyncFetch from "./async_fetch";
import { getBaseRequestConfig } from "./base_request_config";

export async function fetchProfile(userId) {
  /* global API_BASE_URL */
  const url = process.env.REACT_APP_API_URL_LOGIN;

  const response = await asyncFetch(url, getBaseRequestConfig());

  return await response.json();
}

export async function changePassword(
  userId,
  currentPassword,
  newPassword,
  newPasswordRepeated
) {
  const baseRequestConfig = getBaseRequestConfig();

  const requestConfig = Object.assign({}, baseRequestConfig, {
    method: "POST",
    body: JSON.stringify({
      current_password: currentPassword,
      plainPassword: {
        first: newPassword,
        second: newPasswordRepeated
      }
    })
  });

  /* global API_BASE_URL */
  const url = API_BASE_URL + "/password/" + userId + "/change";

  const response = await asyncFetch(url, requestConfig);

  return await response.json();
}
