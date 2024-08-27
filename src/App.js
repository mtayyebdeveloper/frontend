import React from "react";
import ChatWindow from "./components/ChatWindow";
import UserList from "./components/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from './pages/Profile'
import Signup from "./pages/Signup";

const ChatLayouts = () => {
  return (
    <>
      <div className="h-screen flex flex-col sm:flex-row">
        <ChatWindow />
        <UserList />
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatLayouts />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
