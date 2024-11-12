"use client";

import { FC, useEffect } from "react";
import { useCart } from "../context/CartProvider";
import Image from "next/image";
interface Props {}

const Checkout: FC<Props> = () => {
  const { items: cartItems, removeFromCart, updateCart } = useCart();
  useEffect(() => {
    const result = localStorage.getItem("cartItems");
    if (result !== null) {
      console.log(JSON.parse(result));
    }
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      {" "}
      {cartItems.map((cartItem) => {
        return (
          <div key={cartItem.product.id} className="p-4">
            <div className="flex space-x-4">
              <Image
                src={cartItem.product.thumbnail}
                alt=""
                width={64}
                height={64}
                className="rounded object-cover"
              />
              <div className="flex-1">
                <h2 className="font-semibold">Smartphone Case</h2>
                <div className="flex text-gray-400 text-sm space-x-1">
                  <span>{cartItem.count}</span>
                  <span>x</span>
                  <span>{cartItem.count * cartItem.product.salePrice}</span>
                </div>
              </div>

              <div className="ml-auto">
                <button
                  onClick={() => removeFromCart(cartItem.product)}
                  className="text-xs uppercase hover:underline"
                >
                  Remove
                </button>

                <div className="flex items-center justify-between">
                  <button onClick={() => updateCart(cartItem.product, -1)}>
                    -
                  </button>
                  <span className="text-xs">{cartItem.count}</span>
                  <button onClick={() => updateCart(cartItem.product, 1)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
