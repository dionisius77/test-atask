import { RouteObject, useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAppSelector } from '../redux/hook';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from 'pages/home.page';

const MainRoutes = () => {
  const { loading } = useAppSelector(state => state.globalState);

  const routes: RouteObject[] = [
    { path: '/', element: <HomePage />, index: true },
  ];
  const element = useRoutes(routes);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {element}
    </>
  );
};

export default MainRoutes;
