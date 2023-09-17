import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiErrorResponse, ForbiddenError, UnauthorizedError, UnknownError, isApiResponseError } from './response';

const client = axios.create({
  baseURL: process.env.REACT_APP_REST_HOST,
  maxRedirects: 5,
});

const request = (options: AxiosRequestConfig<any>) => {
  const onSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  const onError = function (error: any): Promise<ApiErrorResponse> {
    if (error.response.status === 401) {
      // store.dispatch({
      //   type: AuthActionTypes.LOGOUT,
      // });

      return Promise.reject(UnauthorizedError);
    }

    // if (error.response.status === 403) {
    //   return Promise.reject(ForbiddenError);
    // }

    // if (isApiResponseError(error.response.data)) {
    //   return Promise.reject(error.response.data as ApiErrorResponse);
    // }
    // if (error.message) {
    //   return Promise.reject(UnknownError(error.message));
    // }

    return Promise.reject(error.response.data);
  };

  const token = process.env.REACT_APP_GITHUB_TOKEN;

  return client({
    headers: {
      Authorization: `bearer ${token}`,
      'X-GitHub-Api-Version': "2022-11-28",
      'Accept': "application/vnd.github+json",
    },
    ...options,
  })
    .then(onSuccess)
    .catch(onError);
};

export default request;
