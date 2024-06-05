import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center cursor-pointer"
      >
        <div className="font-bold text-2xl">Blogger</div>
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-8 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            New
          </button>
        </Link>
        <Avatar name="nishant" size={"big"}></Avatar>
      </div>
    </div>
  );
};
