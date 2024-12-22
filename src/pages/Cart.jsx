import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { formater } from "../utils/formater";

function Cart() {
  const { cart, setCart, total, updateTotalPrice } = useContext(CartContext);

  const increase = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const decrease = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
      .filter((item) => item.count > 0);
    setCart(updatedCart);
    updateTotalPrice(updatedCart);
  };

  return (
    <div className="flex-grow flex flex-col p-10 items-center">
      <h1 className="text-center text-2xl font-bold mb-8">
        Carrito de compras
      </h1>
      <div className="flex flex-col">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 mb-4 justify-between"
          >
            <img src={item.img} alt={item.name} className="w-24 h-24" />
            <div className="ml-4">
              <h2 className="capitalize">{item.name}</h2>
              <p>${formater(item.price * item.count)}</p>
            </div>
            <div className="ml-10 flex gap-4 items-center">
              <button
                className="border-4 border-red-500 px-3 py-1 rounded font-bold"
                onClick={() => decrease(item.id)}
              >
                -
              </button>
              <p className="font-semibold">{item.count}</p>
              <button
                className="border-4 border-blue-500 px-3 py-1 rounded font-bold"
                onClick={() => increase(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-5 flex-col gap-4">
        <h2 className="font-bold text-2xl">
          Total a pagar: ${formater(total)}
        </h2>
        <button className="bg-black text-white p-1 text-xl rounded w-32">
          Pagar
        </button>
      </div>
    </div>
  );
}

export default Cart;
