import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#F9ECFE] mt-12">
      <div className="flex md:flex-row lg:flex-row flex-col gap-10 justify-center items-center md:h-[80vh] py-10 lg:pt-0 ">
        <div>
          <h2 className="text-3xl md:text-4xl  lg:text-5xl font-bold">
            Task Management
          </h2>
          <p className="max-w-[320px] lg:max-w-[400px] mt-5 mb-5 font-Montserrat">
            Manage both simple and complex projects by breaking them down into
            milestones, tasklists, tasks, and subtasks. Visualize project plans
            and track progress efficiently with the help of Gantt charts and
            Kanban boards and set up dependencies between related tasks to make
            sure you always stay on schedule.
          </p>
          <Link to="/login">
            <button className="bg-[#F0483E] px-7 py-3 text-white font-Montserrat font-medium">
              Let's Explore
            </button>
          </Link>
        </div>

        <div>
          <img
            className="w-[300px] lg:w-[500px]"
            src="https://st2.depositphotos.com/4230659/47410/v/600/depositphotos_474107832-stock-illustration-isometric-project-deadline-time-management.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
