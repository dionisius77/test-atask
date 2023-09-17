import { RepositoryI } from "_interfaces/github-api.interfaces";
import { BsStarFill } from "react-icons/bs";

const Repositories = ({ repositories }: { repositories: RepositoryI[] }) => {
  return (
    <div className="ml-4 flex flex-col gap-2 items-center justify-center mt-2">
      {repositories.length === 0 ?
        <div>No repository</div> :
        repositories.map(item => (
          <div className="bg-gray-200 w-full h-32 px-2 py-3">
            <div className="flex flex-row justify-between items-center text-lg font-bold">
              <div>{item.name}</div>
              <div className="inline-flex gap-1 items-center justify-center text-md">
                <BsStarFill />
                <div>{item.stargazers_count}</div>
              </div>
            </div>
            <div className="text-sm">{item.description}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Repositories;