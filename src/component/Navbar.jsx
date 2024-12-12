import { useState } from "react";
import pic from "../../public/images/profil.jpg";
import { IoIosClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItem = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Protfolio",
    },
    {
      id: 4,
      text: "Experinece",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="flex justify-between shadow-md max-w-screen-2xl container   md:px-20 items-center h-16 fixed right-0 left-0 top-0 mx-auto px-4 z-50 bg-white">
        <div className="flex space-x-2">
          <img src={pic} alt="" className=" w-12 h-12 rounded-full" />
          <h1 className="font-semibold text-xl  cursor-pointer">
            Giris<span className="text-red-500 text-2xl">H</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>
        {/* Desktop navbar */}
        <div>
          <ul className="font-semibold hidden md:flex space-x-4 cursor-pointer">
            {navItem.map(({ id, text }) => (
              <li className=" hover:text-blue-200 hover:text-xl" key={id}>
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => {
              setMenu(!menu);
            }}
            className="md:hidden "
          >
            {menu ? <IoIosClose size={24} /> : < FiMenu size={24} />}
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      {menu && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6">
          <ul className="md:hidden cursor-pointer  flex flex-col h-screen items-center justify-center">
            {navItem.map(({ id, text }) => (
              <li className=" hover:text-blue-200 hover:text-xl cursor-pointer" key={id}>
               <Link 
                onClick={() => {
                  setMenu(!menu);
                }}
                className=""
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
export default Navbar;
