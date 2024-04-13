import axios from "axios";
import React, { useState } from "react";
import toastr from "toastr";
import { useNavigate } from 'react-router-dom';

const Data = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [firstInp, setFirstInp] = useState(null);
  const navigate = useNavigate()

  const token = localStorage.getItem("token");

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

  // clear data
  const ClearData = () => {
    setFullname("");
    setUsername("");
    setEmail("");
    setCompany("");
  };
  // form data
  const formData = {
    fullname,
    username,
    email,
    company,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullname || !username || !email || !company) {
      toastr.warning("Iltimos barcha maydonlarni to'ldiring!");
      firstInp && firstInp.focus();
      return;
    }
    
    try {
      const checkUsername = await axios.get(`http://localhost:5000/check-username/${username}`);
      if (!checkUsername.data.available) {
        toastr.error("Bu username allaqachon ishlatilmoqda!");
        return username;
      }
  
      const response = await axios.post(
        "http://localhost:5000/profile",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
  
      const data = response.data;
      if (data.status === "ok") {
        ClearData();
        toastr.success("Ma'lumotlar muvaffaqiyatli yuborildi!");
        setTimeout(() => {
          navigate("/datatable");
        }, 3000);
      } else {
        toastr.error("Ma'lumot yuborishda xatolik yuz berdi!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      {token ? (
        <div className="container bg-gray-100 flex items-center justify-center h-screen">
          <form
            action=""
            id="TableForm"
            className="bg-white p-8 rounded-lg shadow-lg  w-[450px] xl:ml-80"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Fullname
              </label>
              <input
                id="fullname"
                value={fullname}
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                type="text"
                name="fullname"
                placeholder="Fullname..."
                onChange={(e) => setFullname(e.target.value)}
                ref={(input) => setFirstInp(input)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                value={username}
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                type="text"
                name="username"
                placeholder="Username..."
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                value={email}
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="company"
              >
                Company
              </label>
              <input
                value={company}
                id="company"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                type="text"
                name="company"
                placeholder="Company..."
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <button
              id="sub-btn"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <p className="text-xl font-bold text-center text-red-500">
          Ro'yxatdan o'tmagansiz!
        </p>
      )}
    </>
  );
};

export default Data;
