import { useLoaderData, Link } from "react-router-dom";

const UserDetail = () => {
  const Data = useLoaderData();
  const { id, name, username, email } = Data;

  return (
    <div className="w-[90%] bg-sky-200 m-auto rounded-4xl text-center p-3 md:w-[40%]">
      <div className="">
        <h4 className="text-[1.4rem]">UserID: {id}</h4>
        <h4 className="text-[1.4rem]">Name : {name}</h4>
        <h4 className="text-[1.4rem]">UserName : {username}</h4>
        <h4 className="text-[1.4rem]">Email: {email}</h4>
      </div>
      <div className="my-2">
        <button className="px-[50px] py-1 bg-pink-300 rounded-4xl active:scale-110 hover:bg-pink-400 transition">
          <Link to="/user" className="text-[1.4rem] text-white">
            Back
          </Link>
        </button>
      </div>
    </div>
  );
};

export const UserloaderDetail = async ({ params }) => {
  const { id } = params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  return res.json();
};

export default UserDetail;
