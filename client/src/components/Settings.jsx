import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut, BiMoon, BiSun } from "react-icons/bi";
import { Link, useParams, } from "react-router-dom";
import axios from "axios";
// import axios from "axios";

const Settings = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [themeOptionsVisible,setThemeOptionsVisible] = useState(false)
  const dropdownRef = useRef(null);
  const [theme, setTheme] = useState("Light");
  const [userData,setUserData] = useState(null)
  const {username} = useParams()


  useEffect(() => {
    const token = localStorage.getItem("token")

    if(token){
      axios.get(`http://localhost:5000/user/${username}`,{
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      })
      .then(response => response.data)
      .then(data => {
        if(data.error){
          console.log(data.error)
        }else{
          setUserData(data)
        }
      })
      .catch(error => console.log("Error fetching user data: ",error))
    }
  })
  
   const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };
  const toggleThemeOptions = () => {
    setThemeOptionsVisible(!themeOptionsVisible)
  }

  const isTokenExists = () => {
    const token = localStorage.getItem("token");
    return token !== null && token !== undefined;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
       setIsLoggedIn(isTokenExists);

    const intervalId = setInterval(() => {
      setIsLoggedIn(isTokenExists());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          aria-expanded="false"
          aria-haspopup="menu"
          id=":r2:"
          className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button"
          onClick={toggleDropdown}
        >
          <IoMdSettings className="size-5" />
        </button>

        {dropdownOpen && (
          <div className="relative">
            <div
              className="absolute right-0 mt-2 -mr-1 bg-white rounded-md shadow-lg overflow-hidden z-20"
              style={{ minWidth: "10rem" }}
            >
              <div className="py-2">
                <Link
                  to= {`/user/${userData.username}`}
                  onClick={closeDropdown}
                  className="block items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                >
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold">My Profile</span>
                  </p>
                </Link>
                <Link
                  to={`/user-edit/${userData.username}`}
                  onClick={closeDropdown}
                  className="block items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                >
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold">Edit Profile</span>
                  </p>
                </Link>
                <Link
                  to="#"
                  onClick={toggleThemeOptions}
                  className="block items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                >
                  <p className="text-gray-600 text-sm mx-2 font-bold">Theme</p>
                </Link>
                {/* <Link
                to="#"
                className="block items-center text-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
              >
                <p className="text-gray-600 text-sm mx-2">
                  <span className="font-bold">Sara Salah</span>
                </p>
              </Link> */}
                <Link
                  to="/signin"
                  onClick={closeDropdown}
                  className="block items-center text-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                >
                  <button
                    className="text-gray-600 text-sm mx-2 flex items-center justify-center text-center"
                    type="button"
                    onClick={isLoggedIn ? handleLogout : undefined}
                  >
                    {isLoggedIn ? (
                      <>
                        <BiLogOut className="size-5 mr-2" />
                        {/* <MdLogout className="size-5" /> */}
                        <span className="font-bold">Logout</span>
                      </>
                    ) : (
                      <>
                        <FaUserCircle className="size-5 mr-2" />
                        <span className="font-bold">Sign In</span>
                      </>
                    )}
                  </button>
                </Link>
              </div>
            </div>
            {/* Light and Dark */}
            {themeOptionsVisible && (
                <div className="absolute right-40 mt-20 bg-white rounded-md shadow-lg overflow-hidden z-50">
                <div className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                  <button
                    className={`text-gray-600 text-sm mx-2 flex items-center justify-center ${
                      theme === "Light" ? "font-bold" : ""
                    }`}
                    type="button"
                    onClick={() => toggleTheme("Light")}
                  >
                    <BiSun className="mr-1 size-5" />
                    <span>Light</span>
                  </button>
                </div>
                <div className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                  <button
                    className={`text-gray-600 text-sm mx-2 flex items-center justify-center ${
                      theme === "Dark" ? "font-bold" : ""
                    }`}
                    type="button"
                    onClick={() => {toggleTheme("Dark");}}
                  >
                    <BiMoon className="mr-1 size-5" />
                    <span>Dark</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Settings;
