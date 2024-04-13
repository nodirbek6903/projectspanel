import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toastr from "toastr";

const Edit = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

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
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/table/edit/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchData();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/table/edit/${id}`,
        data
      );
      setData(response.data);
      toastr.success("Malumotlar muvaffaqqiyatli o'zgartirildi!");
      navigate("/datatable")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container bg-gray-100 flex items-center justify-center h-screen">
      <form
        action=""
        id="TableForm"
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg  w-[450px] xl:ml-80"
      >
        <div className="mb-4">
          <label
            htmlFor="id"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            ID
          </label>
          <input
            id="id"
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
            type="text"
            value={data._id}
            name="id"
            disabled
            placeholder="ID..."
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Fullname
          </label>
          <input
            id="fullname"
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
            type="text"
            value={data.fullname}
            name="fullname"
            onChange={(e) => setData({ ...data, fullname: e.target.value })}
            placeholder="Fullname..."
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
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
            type="text"
            value={data.username}
            name="username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
            placeholder="Username..."
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
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
            type="email"
            value={data.email}
            name="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Email..."
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
            id="company"
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
            type="text"
            value={data.company}
            name="company"
            onChange={(e) => setData({ ...data, company: e.target.value })}
            placeholder="Company..."
          />
        </div>
          <button
            id="sub-btn"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Save
          </button>
      </form>
    </div>
  );
};

export default Edit;
