import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaEdit,
} from "react-icons/fa";
import MyImage from "../images/IMG_20230406_204255.jpg";
import { Link, useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const Myprofile = () => {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();
  const [selectedImage, setSelectedImage] = useState(MyImage);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const objectUrl = URL.createObjectURL(selectedFile);
    setSelectedImage(objectUrl);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (token) {
      axios
        .get(`http://localhost:5000/user/${username}`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        })
        .then((response) => response.data)
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setUserData(data);
          }
        })
        .catch((error) => console.log("Foydalanuvchi profili olishda xatolik:", error));
    }
  }, [username]);
  
  if (!userData) {
    return <div className="p-4 xl:ml-80 flex justify-center items-center">
       <Circles
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperClass
      />
    </div>;
  }

  return (
    <div className="p-8 xl:ml-80">
      <div className="p-4 inline-block rounded-full bg-gray-200">
        <Link to={`/user-edit/${userData.username}`} className="float-right">
          <FaEdit className="size-5" />
        </Link>
      </div>
      <div className="container min-h-[400px] mx-auto my-10 p-8 bg-gray-200 shadow-lg rounded-md">
        <label htmlFor="imageInput" className="cursor-pointer">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={selectedImage}
            alt="Bu yerda sizning rasmingiz bor"
          />
        </label>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        {userData ? (
          <>
            <div>
              <label htmlFor="">Firstname</label>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {userData?.firstname}
              </h1>
            </div>
            <div>
              <label htmlFor="">Lastname</label>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {userData?.lastname}
              </h1>
            </div>
            <div>
              <label htmlFor="">Username</label>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {userData?.username}
              </h1>
            </div>
            {userData?.locationHome ? (
              <div className="manzil">
                <label htmlFor="">Manzil</label>
                <p className="text-gray-600 mb-4 font-bold">
                  {userData?.locationHome}
                </p>
              </div>
            ) : (
              ""
            )}
            <div className="ijtimoiy tarmoqlar flex justify-center space-x-4">
              {userData.links.github ? (
                <a
                  // href="https://github.com/Nodirbek6903"
                  href={
                    `https://github.com/${userData?.links?.github}` ||
                    "https://github.com"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center relative group"
                >
                  <FaGithub className="mr-2 size-7 text-black" />
                  <span className="absolute font-bold text-black top-full left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white p-2 rounded-full shadow-md mt-2">
                    Github
                  </span>
                </a>
              ) : (
                ""
              )}

              {userData.links.instagram ? (
                <a
                  // href="https://instagram.com/Nodirbek_6903"
                  href={
                    `https://instagram.com/${userData?.links?.instagram}` ||
                    "https://instagram.com"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center relative group"
                >
                  <FaInstagram className="mr-2 size-7 text-red-700 font-bold" />
                  <span className="absolute font-bold text-red-500 top-full left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white p-2 rounded-full shadow-md mt-2">
                    Instagram
                  </span>
                </a>
              ) : (
                ""
              )}

              {userData.links.telegram ? (
                <a
                  // href="https://t.me/Nodirbek_6903"
                  href={
                    `https:t.me/${userData?.links?.telegram}` || "https://t.me"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center relative group"
                >
                  <FaTelegram className="mr-2 size-7 text-blue-700" />
                  <span className="absolute font-bold top-full left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white p-2 rounded-full shadow-md mt-2">
                    Telegram
                  </span>
                </a>
              ) : (
                ""
              )}

              {userData.links.linkedin ? (
                <a
                  // href="https://linkedin.com/NodirjonUmarov"
                  href={
                    `https://linkedin.com/${userData?.links?.linkedin}` ||
                    "https://linkedin.com"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center relative group"
                >
                  <FaLinkedin className="mr-2 size-7 text-blue-700" />
                  <span className="absolute font-bold top-full left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white p-2 rounded-full shadow-md mt-2">
                    LinkedIn
                  </span>
                </a>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          <p>Please log in to view your profile.</p>
        )}
      </div>
    </div>
  );
};

export default Myprofile;
