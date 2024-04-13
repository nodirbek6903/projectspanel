import React from "react";
import Data from "./components/data";
import { Routes, Route } from "react-router-dom";
import DataTable from "./components/data-table";
import Notifications from "./components/Notifications";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Register from "./services/Register";
import Login from "./services/Login"
import Edit from "./components/Edit";
import Myprofile from "./components/Myprofile";
import EditProfile from "./components/EditProfile";

function App() {

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
      <Routes>
        {/* {user && <Route path="/" element={<Main />} />} */}
        <Route path="/" element={<Main />} />
        <Route path="/data" element={<Data />} />
        <Route path="/datatable" element={<DataTable />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/table/edit/:id" element={<Edit />} />
        <Route path="/user/:username" element={<Myprofile />} />
        <Route path="/user-edit/:username" element={<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
