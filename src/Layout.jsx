import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Contract from "./pages/contract/Contract";
const Layout = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          <Route path="contract" element={<Contract />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default Layout;
