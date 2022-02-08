import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <div className="fixed bg-[#1E1F2B] top-0 inset-x-0 flex items-center md:px-28 xl:px-36 lg:px-28 rounded-t rounded-2xl pt-8 sm:pt-12 pb-6 z-20">
      <div className="w-1/12 ml-6 sm:mx-0">
        <Logo />
        <img
          src="mail.svg"
          className="absolute right-6 w-12 top-6 sm:hidden"
          alt=""
        />
      </div>
      <div className="w-8/12 mx-20 md:mx-10 hidden sm:block">
        <Nav />
      </div>
      <div className="w-3/12 text-center">
        <a
          href="#ProjectSection"
          className="bg-[#2BA386] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#127a62] focus:scale-105 focus:transition-all focus:duration-100 transition-all duration-300 focus:ring focus:ring-[#84bdaf] hidden lg:block"
        >
          Punya Project ?
        </a>
      </div>
    </div>
  );
}
