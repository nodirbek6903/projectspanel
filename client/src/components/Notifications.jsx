import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotificationData from "../notifications-data/notifications-data";

const Notifications = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleNotificationClick = (index) => {
    setSelectedNotification(index);
  };

  const closeModal = () => {
    setSelectedNotification(null);
  };

  const selectedNotificationData = NotificationData[selectedNotification];

  return (
    <div className="p-4 xl:ml-80">
      <div className="right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20">
        <div className="py-2">
          {NotificationData.map((notification, index) => (
            <div key={index} onClick={() => handleNotificationClick(index)}>
              <Link
                to="#"
                className={`flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2 ${
                  selectedNotification === index ? "bg-gray-200" : ""
                }`}
              >
                <img
                  className="h-8 w-8 rounded-full object-cover mx-1"
                  src={notification.avatar}
                  alt="avatar"
                />
                <p className="text-gray-600 text-sm mx-2">
                  <span className="font-bold">{notification.name}</span>
                  <span>{notification.event}</span>
                  <span>{notification.time}</span>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {selectedNotification !== null && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-200 bg-opacity-80" onClick={closeModal}>
        <div className="bg-white p-4 max-w-[600px] min-h-[200px] rounded-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col justify-center items-center">
                <img className="h-8 w-8 rounded-full object-cover mx-1" src={selectedNotificationData.avatar} alt="avatar" />
                <div className="p-4">
                    <p className="text-xl font-bold mb-2">{selectedNotificationData.name}</p>
                    <p>{selectedNotificationData.message}</p>
                    <p className="font-bold">{selectedNotificationData.time}</p>
                </div>
            </div>
        </div>
    </div>
      )}
    </div>
  );
};

export default Notifications;
