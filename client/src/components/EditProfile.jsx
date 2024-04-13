import axios from "axios";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import toastr from "toastr";

const EditProfile = () => {
  const [userData, setUserData] = useState([]);
  const [github, setGithub] = useState("");
  const [telegram, setTelegram] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [locationHome, setLocationHome] = useState("");
  const { username } = useParams();
  const navigate = useNavigate();

  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "3000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`http://localhost:5000/user-edit/${username}`, {
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
            setLocationHome(data.locationHome || "")
            setGithub(data.links?.github || "");
            setTelegram(data.links?.telegram || "");
            setInstagram(data.links?.instagram || "");
            setLinkedin(data.links?.linkedin || "");
          }
        })
        .catch((error) => console.log("Error fetching user Profile:", error));
    }
  }, [username]);

  const handleSave = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:5000/user-edit/${username}`,
        {
          firstname: userData.firstname,
          lastname: userData.lastname,
          username: userData.username,
          links: {
            github,
            telegram,
            instagram,
            linkedin,
          },
          locationHome,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
  
      setUserData(response.data);
  
      toastr.success("Ma'lumotlar muvaffaqiyatli saqlandi.");
      navigate(`/user/${userData.username}`);
    } catch (error) {
      console.log(error);
    }
  };
  

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
    <div className="p-4 xl:ml-80 bg-gray-300">
      <div className="">
        <h1 className="text-center font-bold uppercase">
          Editing User Profile
        </h1>
        <form action="" onSubmit={handleSave}>
          <div className="flex justify-around">
            <div className="user-malumotlari">
              <div>
                <label className="font-bold uppercase" htmlFor="">
                  Firstname
                </label>
                <br />
                <input
                  type="text"
                  className="p-1 w-[300px] rounded-sm"
                  value={userData.firstname || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, firstname: e.target.value })
                  }
                  placeholder="Firstname"
                />
              </div>
              <div>
                <label className="font-bold uppercase" htmlFor="">
                  Lastname
                </label>
                <br />
                <input
                  className="p-1 w-[300px] rounded-sm"
                  type="text"
                  value={userData.lastname || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, lastname: e.target.value })
                  }
                  placeholder="Lastname"
                />
              </div>
              <div>
                <label className="font-bold uppercase" htmlFor="">
                  Username
                </label>
                <br />
                <input
                  className="p-1 w-[300px] rounded-sm"
                  type="text"
                  value={userData.username || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                  placeholder="Username"
                />
              </div>
              <div>
                <label className="font-bold uppercase" htmlFor="">
                  Manzil
                </label>
                <br />
                <input
                  className="p-1 w-[300px] rounded-sm"
                  type="text"
                  value={locationHome}
                  onChange={e => setLocationHome(e.target.value)}
                  placeholder="Location"
                />
              </div>
            </div>
            <div className="ijtimoiy-tarmoqlar">
              <div>
                <label className="font-bold uppercase" htmlFor="">
                  Github
                </label>
                <br />
                <input
                  type="text"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  className="p-1 w-[300px] rounded-sm"
                  placeholder="https://github.com/my-github-link"
                />
              </div>
              <div>
                <label className="font-bold uppercase" htmlFor="">
                  Instagram
                </label>
                <br />
                <input
                  className="p-1 w-[300px] rounded-sm"
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="https://instagram.com/my-instagram-link"
                />
              </div>
              <div>
                <label className="font-bold uppercase" htmlFor="">
                  Telegram
                </label>
                <br />
                <input
                  className="p-1 w-[300px] rounded-sm"
                  type="text"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  placeholder="https://t.me/my-telegram-link"
                />
              </div>
              <div>
                <label className="font-bold uppercase" htmlFor="">
                  LinkedIn
                </label>
                <br />
                <input
                  className="p-1 w-[300px] rounded-sm"
                  type="text"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="https://linkedin.com/my-linkedin-link"
                />
              </div>
            </div>
          </div>
          <br />
          <div>
            <button className="bg-green-400 w-full h-[30px] font-bold hover:bg-white transition-all 1s rounded-sm">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
