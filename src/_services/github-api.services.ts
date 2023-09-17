import { ApiSuccessResponse } from "_network/response";
import {
  GetUsersRespI,
  RepositoryI,
} from "../_interfaces/github-api.interfaces";
import request from "../_network/request";

const getUsers = (page: number, size: number, q: string): Promise<GetUsersRespI> => {
  return request({
    url: `search/users?page=${page}&per_page=${size}&q=${q}`,
    method: "GET",
  });
};

const getRepository = (userName: string): Promise<RepositoryI[]> => {
  return request({
    url: `users/${userName}/repos`,
    method: "GET",
  });
};

export const GithubServices = {
  getUsers,
  getRepository,
};
