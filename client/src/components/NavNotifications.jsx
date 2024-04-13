import React, { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavNotifications = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
        closeDropdown()
      }
    }
    window.addEventListener("click",handleClickOutside)
    return () => {
      window.addEventListener("click",handleClickOutside)
    }
  },[])

  return (
    <>
      <div
        className="relative"
        ref={dropdownRef}
        onClick={toggleDropdown}
      >
        <button
          aria-expanded="false"
          aria-haspopup="menu"
          id=":r2:"
          className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button"
        >
          <FaBell className="size-5" />
        </button>

        {dropdownOpen && (
          <>
            <div
              onClick={toggleDropdown}
              className="fixed inset-0 h-full w-full z-10"
            ></div>
            <div
              className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20"
              style={{ width: "20rem", maxHeight: "300px", overflowY: "auto" }}
            >
              <div className="py-2">
                <Link
                  to="#"
                  className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="avatar"
                  />
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold">Sara Salah</span> replied on the{" "}
                    <span className="font-bold text-blue-500">
                      Upload Image
                    </span>
                    article. 2m
                  </p>
                </Link>
                <Link
                  to="#"
                  className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    alt="avatar"
                  />
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold">Slick Net</span> start following
                    you. 45m
                  </p>
                </Link>
                <Link
                  to="#"
                  className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="avatar"
                  />
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold">Jane Doe</span> Like Your reply
                    on
                    <span className="font-bold text-blue-500">
                      Test with TDD
                    </span>
                    article. 1h
                  </p>
                </Link>
                <Link
                  to="#"
                  className="flex items-center px-4 py-3 hover:bg-gray-100 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                    alt="avatar"
                  />
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold">Abigail Bennett</span> start
                    following you. 3h
                  </p>
                </Link>
              </div>
              <Link
                to="/notifications"
                onClick={closeDropdown}
                className="block bg-gray-800 text-white text-center font-bold py-2"
              >
                See all notifications
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavNotifications;
