import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import toastr from "toastr";
import { Link } from "react-router-dom";

const DataTable = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
  // table get so'rovi
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/table");
      const data = await response.data;
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // table dagi malumotlarni delete qilish so'rovi
  const deleteData = (id, fullname) => {
    if (window.confirm(`Are you sure you want to delete ${fullname}`)) {
      axios
        .post("http://localhost:5000/deleteData", { id })
        .then((response) => {
          toastr.success(response.data.success);
          fetchData();
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
          toastr.error("Error deleting data. Please try again later.");
        });
    } else {
      //
    }
  };

  // data dagi malumotlarni qidirish uchun
  useEffect(() => {
    const results = items.filter((item) =>
      item.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, items]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {token ? (
        <div className="overflow-hidden">
          <div className="flex justify-between items-center p-4 xl:ml-80 w-[75%]">
            <Link to="/data">
              <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded text-white font-bold text-xl">
                Add+
              </button>
            </Link>
            <input
              type="text"
              placeholder="Search by username..."
              value={searchTerm}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          {searchResults.length === 0 ? (
            <p className="text-xl font-bold uppercase text-center text-red-500">
              Data not found!
            </p>
          ) : (
            <table className="p-4 xl:ml-80 w-[75%]">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    №
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Fullname
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((item, index) => (
                  <tr
                    className={`bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 ${
                      item.editable ? "bg-yellow-100" : ""
                    }`}
                    key={item._id}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item._id}
                    </td>
                    <td
                      className={`text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap }`}
                    >
                      {item.fullname}
                    </td>
                    <td
                      className={`text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap }`}
                    >
                      {item.username}
                    </td>
                    <td
                      className={`text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap }`}
                    >
                      {item.email}
                    </td>
                    <td
                      className={`text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap }`}
                    >
                      {item.company}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap items-center justify-center">
                      <button
                        onClick={() => deleteData(item._id, item.fullname)}
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-red-700 hover:text-white focus:outline-none focus:shadow-outline"
                      >
                        <FaRegTrashCan className="mr-1 size-4 inline-flex justify-center items-center" />
                        <span className="">Delete</span>
                      </button>
                      <button className="bg-orange-500 ml-2 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                        <Link to={`/table/edit/${item._id}`}>
                          <FaEdit className="inline-flex mr-1 size-4" />
                          <span>Edit</span>
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <p className="text-xl font-bold text-center text-red-500">
          You are not logged in!
        </p>
      )}
    </>
  );
};

export default DataTable;
