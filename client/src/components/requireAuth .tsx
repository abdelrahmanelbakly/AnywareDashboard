import React from "react";
import { useDispatch } from "react-redux";
import AuthAction from '../reducers/auth'

type AuthAction = { type: "LOGIN" } | { type: "LOGOUT" };
const RequireAuth: React.FC = () => {
    console.log("here")
  const dispatch = useDispatch();

  const handleLogin = () => {
    const loginAction: AuthAction = { type: "LOGIN" };
    dispatch(loginAction);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="text-center bg-gray-200 rounded p-4">
        <h1 className="text-2xl font-bold">Login Page</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default RequireAuth;