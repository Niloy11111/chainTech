import moment from "moment";

import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const UpdateTask = () => {
  const taskInfo = useLoaderData();

  const axiosPublic = UseAxiosPublic();
  const { name, priority, postTime, description, _id } = taskInfo;

  const { register, handleSubmit } = useForm();

  const onSubmitUpdateTask = async (data) => {
    const formattedDateTime = moment().format("MMM Do YY");
    console.log(formattedDateTime);

    const updatedTaskInfo = {
      name: data.name,
      priority: data.priority,
      postTime: formattedDateTime,
      description: data.description,
    };

    console.log(updatedTaskInfo);

    const updateTaskRes = await axiosPublic.put(
      `/updateTask/${_id}`,
      updatedTaskInfo
    );
    console.log(updateTaskRes.data);
    if (updateTaskRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} has been updated`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="w-5/6 mx-auto mb-20 lg:w-[800px] ">
        <h2 className="text-3xl my-8 font-Montserrat font-bold text-center">
          Edit Task{" "}
        </h2>

        <form>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-xl font-inter ">Title</span>
            </label>
            <input
              {...register("name", { required: true })}
              required
              type="text"
              defaultValue={name}
              placeholder="Type here"
              className="py-3 border pl-3 rounded outline-none input-bordered w-full "
            />
          </div>

          <div className="flex gap-5">
            {/* category  */}

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-xl font-inter ">
                  Priority{" "}
                </span>
              </label>

              <select
                defaultValue="default"
                {...register("priority", { required: true })}
                className="py-3 border pl-3 rounded outline-none  w-full "
              >
                <option className="" disabled value="default">
                  {priority}{" "}
                </option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate </option>
                <option value="High">High </option>
              </select>
            </div>
          </div>

          <div className="flex gap-4  mb-6">
            <div className="w-full">
              <h4 className=" mb-2 text-xl font-inter "> Deadlines </h4>
              <input
                type="datetime-local"
                {...register("date", { required: true })}
                defaultValue={postTime}
                className="py-3 border pl-3 rounded outline-none w-full"
              />
            </div>
          </div>

          <h2 className="text-xl font-inter mb-2">Task Details</h2>
          <textarea
            {...register("description")}
            defaultValue={description}
            placeholder="Description"
            className="py-3 border pl-3 rounded outline-none textarea-lg w-full mb-6"
          ></textarea>

          <button onClick={handleSubmit(onSubmitUpdateTask)} className="">
            <button>Update Task</button>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
