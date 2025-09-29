import { useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      <header className=" w-screen flex justify-between items-center py-4 px-4 lg:px-20 z-50 ">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-3xl md:text-4xl lg:text-5xl font-light m-0 z-50"
        >
          LOGO{" "}
        </h1>
        <nav className="hidden md:flex items-center gap-12  ">
          <a
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300"
          >
            COMPANY
          </a>
          <a
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300"
          >
            FEATURES
          </a>
          <a
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300"
          >
            RESOURCES
          </a>
          <a
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500"
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300"
          >
            DOCS
          </a>
        </nav>
        <button className="hidden md:block bg-[#a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer ">
          Sign In
        </button>

        <button
          className="md:hidden p-2 "
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <MdMenu size={40}></MdMenu> Menu
        </button>
      </header>
      <div
        className={
          toggleMenu
            ? "hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black/10 backdrop-blur-md "
            : " fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black/10 backdrop-blur-md"
        }
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300"
          >
            COMPANY
          </a>
          <a
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300"
          >
            FEATURES
          </a>
          <a
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300"
          >
            RESOURCES
          </a>
          <a
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300"
          >
            DOCS
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
