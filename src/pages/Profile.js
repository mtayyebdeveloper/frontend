import React from "react";

const Profile = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Username</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value="John Doe"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value="johndoe@example.com"
            readOnly
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
