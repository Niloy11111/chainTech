import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddTask from "../AddTask/AddTask";
import AllTask from "../AllTask/AllTask";
import Home from "../Home/Home";
import UpdateTask from "../UpdateTask/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>This is error page</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/allTask",
        element: <AllTask></AllTask>,
      },
      {
        path: "updateTask/:id",

        element: <UpdateTask></UpdateTask>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tasks/${params.id}`),
      },
    ],
  },
]);

export default router;
