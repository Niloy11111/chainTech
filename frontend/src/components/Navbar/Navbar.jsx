import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#F0483E] rounded-full font-Inter text-sm text-[#FFF] px-4  py-2 "
              : "bg-[#cfbab9] font-Inter hover:text-[#F0483E] rounded-full  text-sm px-4  py-2"
          }
        >
          HOME
        </NavLink>
      </li>

      <li className="">
        <NavLink
          to="/addTask"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  bg-[#F0483E] rounded-full font-Inter text-sm text-[#FFF] px-4  py-2 "
              : " bg-[#cfbab9] font-Inter hover:text-[#F0483E] rounded-full  text-sm px-4  py-2"
          }
        >
          Add Task
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allTask"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-[#F0483E] rounded-full font-Inter text-sm text-[#FFF] px-4  py-2 "
              : "bg-[#cfbab9] font-Inter hover:text-[#F0483E] rounded-full  text-sm px-4  py-2"
          }
        >
          All Task
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/addAJob"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  bg-[#F0483E] text-[#FFF] px-2  py-2 "
              : ""
          }
        >
          ADD JOB
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/myJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  bg-[#F0483E] text-[#FFF] px-2  py-2 "
              : ""
          }
        >
          MY JOBS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/appliedJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  bg-[#F0483E] text-[#FFF] px-2  py-2 "
              : ""
          }
        >
          APPLIED JOBS
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex justify-between pt-8 mx-10">
      <div>
        <h2>Task</h2>
      </div>

      <div>
        <ul className="flex gap-6">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
