import { NavLink } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <img src="https://media.istockphoto.com/id/1067573454/photo/3d-word-oops.jpg?b=1&s=612x612&w=0&k=20&c=sigVwta68SrP8DN-CLIfyI7l81YMpgQEmhBxsvOsp1Q="></img>
        <h1 className="text-[#FF444A] text-4xl font-bold my-8 text-center">
          404 - Not Found!
        </h1>
        <NavLink to="/">
          <div className="flex justify-center">
            <button className="text-lg text-[#FFF] font-semibold px-7 py-3 bg-[#F0483E] rounded-lg">
              Go Home
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorElement;
