import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const User = () => {
  const Data = useLoaderData();
  return (
    <div className="w-[70%] m-auto">
      <h1 className="text-center text-3xl ">Uer Data API</h1>
      {Data.map((p) => (
        <div className="w-[290px] m-auto text-center flex flex-col  md:text-start md:m-0 ">
          <Link
            key={p.id}
            to={p.id.toString()}
            className="px-[25px] py-1 rounded-3xl my-1 bg-sky-300 hover:bg-black hover:text-white text-[1.3rem] cursor-pointer active:scale-110 transition"
          >
            {p.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
export const Userloader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default User;
