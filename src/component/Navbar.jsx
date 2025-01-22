import { useState, useEffect } from "react";
import pic from "../../public/images/profil.jpg";
import { IoIosClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Protfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div
        className={`flex justify-between max-w-screen-2xl container md:px-20 items-center h-16 fixed right-0 left-0 top-0 mx-auto px-4 z-50 bg-white transition-shadow duration-300 ${
          scrolling ? "shadow-lg" : "shadow-md"
        }`}
      >
        {/* Logo and Name */}
        <div className="flex space-x-2">
          <img src={pic} alt="Profile of GirisH" className="w-12 h-12 rounded-full" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Giris<span className="text-red-500 text-2xl">H</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <ul className="font-semibold hidden md:flex space-x-4 cursor-pointer">
          {navItem.map(({ id, text }) => (
            <li
              className="hover:text-blue-500 transition-colors duration-200"
              key={id}
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-red-500"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar Toggle */}
        <button
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close menu" : "Open menu"}
          className="md:hidden"
        >
          {menu ? <IoIosClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
            menu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {navItem.map(({ id, text }) => (
            <li
              className="hover:text-blue-500 text-xl font-semibold"
              key={id}
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-red-500"
                onClick={() => setMenu(false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
