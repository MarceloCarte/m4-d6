/* eslint-disable react/prop-types */
import { CartContext } from "./cartContext";
import { useState, useMemo } from "react";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const updateTotalPrice = (cart) => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
    setTotal(totalPrice);
  };

  const contextValue = useMemo(
    () => ({
      cart,
      setCart,
      total,
      updateTotalPrice,
    }),
    [cart, total]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
