import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-10">
      <h1 className="text-4xl mb-4">
        ¡Hola <span className="font-bold">user0110101</span>!
      </h1>
      <h3 className="text-2xl">user0110101@gmol.xd</h3>
      <Link
        to={"/login"}
        className="flex items-center gap-1 border border-white bg-blue-500 text-white rounded py-1 px-3 mt-2"
      >
        <IoIosLock />
        Logout
      </Link>
    </div>
  );
}

export default Profile;
