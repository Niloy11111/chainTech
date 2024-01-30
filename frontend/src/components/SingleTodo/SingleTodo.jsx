import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseTask from "../../Hooks/UseTasks";

const SingleTodo = ({ item }) => {
  const { priority, description, postTime, name, _id } = item;
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

        if (res.data.deletedCount > 0) {
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

  const handleMakeComplete = () => {
    axiosPublic.patch(`/tasks/${_id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.name} is completed now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="bg-gray-100 p-7 rounded">
      <div className="flex gap-2">
        <h2 className="text-xl font-medium font-Inter">{name}</h2>
        <p className="font-Inter ml-2 text-[#F0483E]">{priority}</p>
      </div>
      <p className="text-lg font-Inter my-2"> {description}</p>
      <div className="flex justify-between">
        <p className="font-Inter">Submission Deadline : {postTime}</p>
      </div>
      <div className="mt-3 flex gap-1 items-center">
        <button
          onClick={() => handleDeleteTask(item)}
          className="rounded-full  bg-[#D73A70] px-4 text-sm py-2 font-semibold font-Inter text-white "
        >
          Delete
        </button>
        <Link to={`/updateTask/${_id}`}>
          {" "}
          <button className="ml-4 text-sm bg-[#D73A70] px-4 rounded-full py-2 font-semibold font-Inter text-white ">
            Edit
          </button>
        </Link>
        <div className="text sm font-semibold ml-2">
          {item.status === "completed" ? (
            "Completed"
          ) : (
            <button
              onClick={handleMakeComplete}
              className="ml-4 text-sm bg-[#D73A70] px-4 rounded-full py-2 font-semibold font-Inter text-white "
            >
              Make Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
