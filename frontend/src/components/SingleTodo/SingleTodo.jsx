import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseTask from "../../Hooks/UseTasks";

const SingleTodo = ({ item }) => {
  const { priority, description, postTime, name, _id } = item;
  const [complete, setComplete] = useState(false);
  const axiosPublic = UseAxiosPublic();
  const [tasks, loading, refetch] = UseTask();
  const handleDeleteTask = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/tasks/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  const handleTaskComplete = () => {
    setComplete(true);
  };

  return (
    <div className="bg-gray-100 p-7 rounded">
      <h2 className="text-xl font-medium font-Montserrat">{name}</h2>
      <p className="text-lg font-Inter my-2"> {description}</p>
      <div className="flex justify-between">
        <p className="font-inter ">Submission Time {postTime}</p>

        <p className="font-inter bg-black text-white max-w-max px-1 rounded">
          {priority}
        </p>
      </div>
      <div className="mt-3">
        <button
          onClick={() => handleDeleteTask(item)}
          className="rounded-full  bg-[#6473FF] px-4 text-sm py-2 font-semibold font-Inter text-white "
        >
          Delete
        </button>
        <Link to={`/updateTask/${_id}`}>
          {" "}
          <button className="ml-4 text-sm bg-[#6473FF] px-4 rounded-full py-2 font-semibold font-Inter text-white ">
            Edit
          </button>
        </Link>
        {complete ? (
          <h2 className="inline-block ml-4 text-sm font-semibold font-Inter ">
            {" "}
            Completed
          </h2>
        ) : (
          <button
            onClick={handleTaskComplete}
            className="ml-4 text-sm bg-[#6473FF] px-4 rounded-full py-2 font-semibold font-Inter text-white "
          >
            Make Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleTodo;
