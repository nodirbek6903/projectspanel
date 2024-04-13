import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaBell,
  FaHome,
  FaTable,
  FaUserPlus,
} from "react-icons/fa";
import { Link,useLocation } from "react-router-dom";
import NavNotifications from './NavNotifications';
import Settings from "./Settings";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const [selectedItem, setSelecetedItem] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation()

  const handlechangeItem = (item) => {
    setSelecetedItem(item);
  };

  const isTokenExists = () => {
    const token = localStorage.getItem("token");
    return token !== null && token !== undefined;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    setIsLoggedIn(isTokenExists());

    const pathname = location.pathname
    switch (pathname) {
      case "/":
        setSelecetedItem("home")
        break;
      case "/data":
        setSelecetedItem("data")
        break;
      case "/datatable":
        setSelecetedItem("data table")
        break;
      case "/notifications":
        setSelecetedItem("notifications")
        break;
      default:
        setSelecetedItem("")
        break;
    }

    const intervalId = setInterval(() => {
      setIsLoggedIn(isTokenExists());
    }, 500);

    return () => clearInterval(intervalId);
  }, [location.pathname]);

  return (
    <>
      <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <div className="m-4">
          <ul className="mb-4 flex flex-col gap-1">
            <li>
              <Link to="/" aria-current="page" href="#">
                <button
                  onClick={() => handlechangeItem("home")}
                  className={`${
                    selectedItem === "home"
                      ? "bg-gradient-to-tr from-blue-600 to-blue-400"
                      : ""
                  } middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white  hover:bg-white/10  w-full flex items-center gap-4 px-4 capitalize`}
                  type="button"
                >
                  <FaHome className="size-5" />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    dashboard
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/data">
                <button
                  onClick={() => handlechangeItem("data")}
                  className={`${
                    selectedItem === "data"
                      ? "bg-gradient-to-tr from-blue-600 to-blue-400"
                      : ""
                  } middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize`}
                  type="button"
                >
                  <FaUserCircle className="size-5" />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                     data
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/datatable" className="">
                <button
                  onClick={() => handlechangeItem("data table")}
                  className={`${
                    selectedItem === "data table"
                      ? "bg-gradient-to-tr from-blue-600 to-blue-400"
                      : ""
                  } middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize`}
                  type="button"
                >
                  <FaTable className="size-5" />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    data table
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/notifications" className="">
                <button
                  onClick={() => handlechangeItem("notifications")}
                  className={`${
                    selectedItem === "notifications"
                      ? "bg-gradient-to-tr from-blue-600 to-blue-400"
                      : ""
                  } middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize`}
                  type="button"
                >
                  <FaBell className="size-5" />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    notifications
                  </p>
                </button>
              </Link>
            </li>
          </ul>
          <ul className="mb-4 flex flex-col gap-1">
            <li className="mx-3.5 mt-4 mb-2">
              <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
                auth pages
              </p>
            </li>
            <li>
              <Link to="/signin" className="">
                <button
                  onClick={isLoggedIn ? handleLogout : undefined}
                  className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                >
                  {isLoggedIn ? (
                    <>
                      <BiLogOut className="size-5" />
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Logout
                      </p>
                    </>
                  ) : (
                    <>
                      <FaUserCircle className="size-5" />
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Sign In
                      </p>
                    </>
                  )}
                </button>
              </Link>
            </li>
            <li>
              {isLoggedIn ? (
                ""
              ) : (
                <Link to="/signup" className="">
                  <button
                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <FaUserPlus className="size-5" />
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                      sign up
                    </p>
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 xl:ml-80">
        <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <nav aria-label="breadcrumb" className="w-max">
                <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                  <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                    <Link to="/">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
                        dashboard
                      </p>
                    </Link>
                    <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
                      /
                    </span>
                  </li>
                  <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                    <Link to="/">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                        home
                      </p>
                    </Link>
                  </li>
                </ol>
              </nav>
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">
                {selectedItem}
              </h6>
            </div>
            <div className="flex items-center">
              {/* ozgar */}
              <Settings />
              <NavNotifications />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
