import useUsers from "hooks/useUsers";
import { useEffect } from "react";
import { Accordion, Button, Input } from "react-daisyui";
import { useAppSelector } from "redux/hook";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Spinner from "components/spinner";
import Repositories from "components/repositories";

const HomePage = () => {
  const { getUsers, userData, getRepository, loadingRepo, repository } = useUsers();
  const { loading } = useAppSelector(state => state.globalState);

  const ValidationSchema = yup.object().shape({
    userName: yup.string().required("Username is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<{ userName: string }>({
    mode: "onChange",
    resolver: yupResolver(ValidationSchema),
  });

  const handleSearch = ({ userName }: { userName: string }) => {
    getUsers(1, 5, userName);
  }

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(handleSearch)} className="flex flex-col md:flex-row gap-2">
        <div className="md:flex-grow w-full">
          <Input className="w-full rounded-md" {...register("userName")} disabled={loading} />
          {errors.userName &&
            <p className="text-xs text-red-400">
              {errors.userName.message}
            </p>
          }
        </div>
        <Button type="submit" className="rounded-md flex flex-row gap-1 md:flex-grow-0 w-full md:w-auto">
          {loading && <Spinner />}Search
        </Button>
      </form>
      {userData &&
        <div className="mt-2">
          <p>Showing users for "{getValues("userName")}"</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {userData?.items && userData.items.map((item, i) =>
              <Accordion icon="arrow" key={item.id} className="rounded-sm" onClick={() => getRepository(item.login)}>
                <Accordion.Title className="text-md font-medium bg-gray-100">
                  {item.login}
                </Accordion.Title>
                <Accordion.Content>
                  {loadingRepo ?
                    <div className="w-full flex items-center justify-center mt-2"><Spinner /></div>
                    :
                    <Repositories repositories={repository} />
                  }
                </Accordion.Content>
              </Accordion>
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default HomePage;