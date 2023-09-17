import { GetUsersRespI, RepositoryI, UserI } from "_interfaces/github-api.interfaces";
import { GithubServices } from "_services/github-api.services";
import { useState } from "react";
import { toast } from "react-toastify";
import { hideLoading, showLoading } from "redux/global/global.action";
import { useAppDispatch } from "redux/hook";

const useUsers = () => {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<GetUsersRespI>();
  const [repository, setRepository] = useState<RepositoryI[]>([]);
  const [loadingRepo, setLoadingRepo] = useState(false);

  const getUsers = async (page: number, size: number, q: string) => {
    try {
      dispatch(showLoading());
      const resp = await GithubServices.getUsers(page, size, q);
      setUserData(resp);
    } catch (error) {
      setUserData(undefined);
      console.error(error);
      toast.error((error as Error).message);
    } finally {
      dispatch(hideLoading());
    }
  }

  const getRepository = async (userName: string) => {
    try {
      setLoadingRepo(true);
      const resp = await GithubServices.getRepository(userName);
      setRepository(resp);
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message);
    } finally {
      setLoadingRepo(false);
    }
  }

  return { getUsers, userData, getRepository, loadingRepo, repository };
}

export default useUsers;