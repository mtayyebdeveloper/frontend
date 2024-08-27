import React from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = ["User 1", "User 2", "User 3", "User 4"];

  return (
    <div className="w-full sm:w-1/3 lg:w-1/4 bg-gray-800 p-4 text-white">
      <h2 className="text-xl mb-4">Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            {user}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link to="/chat/profile" className="text-blue-400 hover:underline">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default UserList;
