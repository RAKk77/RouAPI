import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-[100%] m-auto mt-2 flex justify-between bg-sky-600 items-center p-2 md:w-[80%] md:px-[20px] md:rounded-3xl">
      <img
        src="https://blog.logomaster.ai/hs-fs/hubfs/samsung-logo-1993.jpg?width=672&height=454&name=samsung-logo-1993.jpg"
        alt="Logo"
        className="w-[100px] rounded-full hover:scale-110 transition-all"
      />
      <ul className="w-[70%] flex justify-between md:w-[40%] md:m-auto">
        <li className="text-[1.2rem] text-sky-100 hover:rotate-1 hover:text-black transition md:text-[1.4rem]">
          <Link to="/">Home</Link>
        </li>
        <li className="text-[1.2rem] text-sky-100 hover:rotate-1 hover:text-black transition md:text-[1.4rem]">
          <Link to="About">About</Link>
        </li>
        <li className="text-[1.2rem] text-sky-100 hover:rotate-1 hover:text-black transition md:text-[1.4rem]">
          <Link to="Info">Information</Link>
        </li>
        <li className="text-[1.2rem] text-sky-100 hover:rotate-1 hover:text-black transition md:text-[1.4rem]">
          <Link to="User">User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
