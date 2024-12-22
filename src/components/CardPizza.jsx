/* eslint-disable react/prop-types */
import { formater } from "../utils/formater";
import { PiEyes } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CardPizza({ pizza }) {
  const { cart, setCart, updateTotalPrice } = useContext(CartContext);

  const handleAdd = () => {
    const existingPizzaIndex = cart.findIndex((item) => item.id === pizza.id);

    if (existingPizzaIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingPizzaIndex].count += 1;
      setCart(updatedCart);
      updateTotalPrice(updatedCart);
    } else {
      const updatedCart = [...cart, { ...pizza, count: 1 }];
      setCart(updatedCart);
      updateTotalPrice(updatedCart);
    }
  };

  return (
    <div className="border border-gray-300 rounded-md shadow-md max-w-[500px]">
      <div>
        <img src={pizza.img} alt="pizza" className="rounded-t-md w-full" />
      </div>
      <div className="border-b border-gray-300 p-2 pl-5">
        <p className="text-xl font-semibold capitalize">Pizza {pizza.name}</p>
      </div>
      <div className="border-b border-gray-300 text-center py-2 p-1">
        <p className="text-xs italic p-2">&quot;{pizza.desc}&quot;</p>
        <h2 className="mt-3 mb-2 font-semibold">Ingredientes:</h2>
        <div className="flex justify-center items-center text-center text-sm mb-2">
          <LiaPizzaSliceSolid />
          {pizza.ingredients.join(", ")}.
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <h2 className="text-center text-2xl font-semibold">
            Precio: ${formater(pizza.price)}
          </h2>
        </div>
        <div className="flex justify-between p-4 px-10">
          <button className="border border-black rounded flex items-center gap-1 p-1 px-2 shadow-md">
            Ver Más <PiEyes />
          </button>
          <button
            onClick={handleAdd}
            className="border bg-black border-white text-white rounded flex items-center gap-2 px-2 p-1 shadow-md"
          >
            Añadir
            <BsCart3 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
