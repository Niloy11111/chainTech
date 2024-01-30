import moment from "moment";

import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const UpdateTask = () => {
  const taskInfo = useLoaderData();

  const axiosPublic = UseAxiosPublic();
  const { name, priority, postTime, description, _id } = taskInfo;
  console.log("postTime", postTime);
  const formattedDate = moment(postTime, "MMM Do YY").format("YYYY-MM-DD");
  console.log("format", formattedDate);

  const { register, handleSubmit } = useForm();

  const onSubmitUpdateTask = async (data) => {
    const formattedDateTime = moment(data.date).format("MMM Do YY");

    console.log(formattedDateTime, "date");

    const updatedTaskInfo = {
      name: data.name,
      priority: data.priority,
      postTime: formattedDateTime,
      description: data.description,
    };

    const updateTaskRes = await axiosPublic.put(
      `/updateTask/${_id}`,
      updatedTaskInfo
    );
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
              <span className="label-text text-xl font-Inter font-semibold ">
                Title
              </span>
            </label>
            <input
              {...register("name")}
              required
              type="text"
              defaultValue={name}
              placeholder="Type here"
              className="py-3 mt-2 border pl-3 rounded outline-none input-bordered w-full "
            />
          </div>

          <div className="flex gap-5">
            {/* category  */}

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-xl font-Inter font-semibold ">
                  Priority{" "}
                </span>
              </label>

              <select
                defaultValue={priority}
                {...register("priority")}
                className="py-3 border mt-2 pl-3 rounded outline-none  w-full "
              >
                <option value={priority}>{priority}</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate </option>
                <option value="High">High </option>
              </select>
            </div>
          </div>

          <div className="flex gap-4  mb-6">
            <div className="w-full">
              <h4 className=" mb-2 text-xl font-Inter font-semibold ">
                {" "}
                Deadlines{" "}
              </h4>
              <input
                defaultValue={formattedDate}
                type="date"
                {...register("date")}
                className="py-3 border pl-3 rounded outline-none w-full"
              />
            </div>
          </div>

          <h2 className="text-xl font-Inter font-semibold mb-2">
            Task Details
          </h2>
          <textarea
            {...register("description")}
            defaultValue={description}
            placeholder="Description"
            className="py-3 border pl-3 rounded outline-none textarea-lg w-full mb-6"
          ></textarea>

          <button
            onClick={handleSubmit(onSubmitUpdateTask)}
            className="bg-[#D73A70] text-white px-7 py-2 font-Inter font-semibold  rounded-full"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
