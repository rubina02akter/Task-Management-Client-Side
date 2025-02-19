import { Link } from "react-router-dom";
import bg from "../../src/assets/images/Hexagon (1).svg";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-[#FDFAF3] min-h-screen flex flex-col items-center">
      {/* Cover Section */}
      <div className="w-full relative">
        <img
          src={bg}
          alt="Cover Background"
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt={user?.displayName || "User"}
            className="w-32 h-32 rounded-full object-cover border-4 border-[#CF800D]"
          />
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-xl border border-[#CF800D] rounded-xl p-6 mt-20 w-96 text-center">
        <h2 className="text-2xl font-semibold text-[#CF800D]">{user?.displayName || "User Name"}</h2>
        <p className="text-gray-600 mt-2">Email: {user?.email || "user@example.com"}</p>

        {/* Profile Message */}
        <p className="text-sm text-gray-500 mt-4">
          Welcome to your profile! Manage your account details here.
        </p>

        <Link
          to="/dashboard/update-user-profile"
          className="btn bg-gradient-to-r from-[#CF800D] to-yellow-500 mt-5 w-full rounded-lg text-white py-2 font-medium"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
