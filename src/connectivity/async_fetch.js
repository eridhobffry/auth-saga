import HttpApiCallError from "../errors/HttpApiCallError";

export default async function asyncFetch(url, requstConfig = {}) {
  const response = await fetch(url, requstConfig);

  const isSuccess = response.status >= 200 && response.status < 300;

  if (isSuccess) {
    return response;
  }

  const error = new HttpApiCallError(response.statusText, response.status);
  error.response = await response.json();

  throw error;
}
