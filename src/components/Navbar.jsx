import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between relative overflow-x-hidden">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="lama_logo" w={32} h={32} />
        <span>adibos</span>
      </Link>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "×" : "☰"}
        </div>

        {/* FIXED MENU PANEL */}
        <div
          className={`fixed top-16 left-0 gap-8 font-medium text-lg w-full h-[calc(100vh-4rem)] bg-[#e6e6ff] flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link to="#">Home</Link>
          <Link to="#">Trending</Link>
          <Link to="#">Most Popular</Link>
          <Link to="#">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login ✋
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="#">Home</Link>
        <Link to="#">Trending</Link>
        <Link to="#">Most Popular</Link>
        <Link to="#">About</Link>

        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login ✋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
