import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { FaUserLock } from "react-icons/fa";
import { IoIosUnlock, IoIosLock } from "react-icons/io";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { BsCart3 } from "react-icons/bs";
import { formater } from "../utils/formater";
import { Link } from "react-router-dom";

function Navbar() {
  const { total } = useContext(CartContext);
  const [token, setToken] = useState(true);
  function changeLogin() {
    setToken((prevToken) => !prevToken);
  }

  return (
    <div className="flex bg-black text-white items-center p-3">
      <div className="flex gap-2 items-center grow">
        <h2 className="mr-2 text-2xl">¡Pizzeria Mamma Mia!</h2>
        <div className="flex gap-2 text-md">
          <Link
            to={"/"}
            className="flex items-center gap-1 border border-white rounded-sm py-1 px-2"
          >
            <LiaPizzaSliceSolid />
            Home
          </Link>

          {token ? (
            <div className="flex gap-2">
              <Link
                to={"/login"}
                className="flex items-center gap-1 border border-white rounded-sm py-1 px-2"
                onClick={changeLogin}
              >
                <FaUserLock />
                Login
              </Link>
              <Link
                to={"/register"}
                className="flex items-center gap-1 border border-white rounded-sm py-1 px-2"
              >
                <FaUserLock />
                Register
              </Link>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to={"/profile"}
                className="flex items-center gap-1 border border-white rounded-sm py-1 px-2"
              >
                <IoIosUnlock />
                Profile
              </Link>
              <Link
                to={"/login"}
                className="flex items-center gap-1 border border-white rounded-sm py-1 px-2"
                onClick={changeLogin}
              >
                <IoIosLock />
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        <Link
          to={"/cart"}
          className="flex items-center gap-1 border border-teal-500 rounded-sm text-teal-500 py-1 px-2 text-md"
        >
          <BsCart3 />
          Total: ${formater(total)}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
