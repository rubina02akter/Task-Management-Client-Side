import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setSuccess(false);
    setError("");

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        const displayName = loggedInUser.displayName || "User";
        Swal.fire(`Welcome, ${displayName}!`);
        e.target.reset();
        navigate("/");
        setSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        const displayName = loggedInUser.displayName || "User";
        Swal.fire(`Welcome, ${displayName}!`);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FDFAF3] px-4">
      <div className="w-full max-w-md p-8 bg-gray-900 shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold text-green-400 text-center mb-6">
          Log in to Your Account
        </h2>

        <form onSubmit={handleLogIn} className="space-y-4">
          {/* Email Input */}
          <div className="form-control">
            <label className="text-gray-300 text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-green-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="text-gray-300 text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-green-500"
              required
            />
            <div className="text-right">
              <NavLink className="text-sm text-green-400 hover:text-green-500">
                Forgot password?
              </NavLink>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-green-800 rounded-lg hover:shadow-md transition duration-300">
            Log In
          </button>
        </form>

        {/* Success & Error Messages */}
        {success && <p className="text-center text-green-400 mt-3">User logged in successfully!</p>}
        {error && <p className="text-center text-red-500 mt-3">{error}</p>}

        {/* Register Link */}
        <p className="text-center text-gray-300 mt-4">
          New here?{" "}
          <Link to="/register" className="text-green-400 hover:text-green-500 font-medium">
            Create an account
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="w-full border-t border-gray-700"></div>
          <p className="px-3 text-gray-400">OR</p>
          <div className="w-full border-t border-gray-700"></div>
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center py-3 border border-gray-700 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
        >
          <FcGoogle className="text-2xl mr-2" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
