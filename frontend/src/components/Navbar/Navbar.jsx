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
    </>
  );

  return (
    <div className="flex justify-between pt-8 mx-16">
      <div>
        <h2 className="text-xl font-bold font-Inter">
          <span className="text-[#FF0000] ">Task</span>Management
        </h2>
      </div>

      <div>
        <ul className="flex gap-6">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
