import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <h1 className="text-center text-[2rem]">Page User </h1>
      <Outlet />
    </div>
  );
};

export default UserLayout;
