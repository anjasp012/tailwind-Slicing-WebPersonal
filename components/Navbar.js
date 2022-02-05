import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <div className="fixed bg-[#1E1F2B] top-0 inset-x-0 flex items-center px-48 rounded-t rounded-2xl pt-12 pb-6 z-20">
      <div className="w-1/12">
        <Logo />
      </div>
      <div className="w-8/12">
        <Nav />
      </div>
      <div className="w-3/12 text-right">
        <a
          href=""
          className="bg-[#2BA386] text-white font-semibold px-8 py-3 rounded-md"
        >
          Punya Project
        </a>
      </div>
    </div>
  );
}
