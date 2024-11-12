"use client";
/* eslint-disable */
import React, { ChangeEvent } from "react";
import { useCart } from "../context/CartProvider";
import Image from "next/image";
import { FC, useEffect } from "react";

interface Props {}

const page: FC<Props> = (props) => {
  const {
    countTotalPrice,
    items: cartItems,
    removeFromCart,
    updateCart,
    clearCart,
  } = useCart();
  useEffect(() => {
    const result = localStorage.getItem("cartItems");
    if (result !== null) {
      console.log(JSON.parse(result));
    }
  }, []);

  const payable = countTotalPrice;
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <h1 className="py-4 text-2xl">Checkout</h1>
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.product.id} className="p-4">
              <div className="flex space-x-4">
                <Image
                  src={cartItem.product.thumbnail}
                  alt=""
                  className="rounded object-cover"
                  width={64}
                  height={64}
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

        {/* <div className="py-4 flex flex-col items-end">
        <h1 className="font-semibold text-xl uppercase">Total</h1>
        <p className="font-semibold">
          <span className="text-gray-400 font-normal">
            The total of your cart is:
          </span>{" "}
          ${countTotalPrice()}
        </p>

        <button
          onClick={() => {
            console.log("Handle Payment Process...");
          }}
          className="border-2 border-orange-600 py-2 px-6 mt-4 rounded text-orange-600 uppercase"
        >
          Checkout
        </button>
      </div> */}
      </div>
      {/* <form action="https://www.payfast.co.za/eng/process" method="post">
   <input type="hidden" name="merchant_id" value="10000100">
   <input type="hidden" name="merchant_key" value="46f0cd694581a">
   <input type="hidden" name="amount" value="100.00">
   <input type="hidden" name="item_name" value="Test Product">
   <input type="submit">
</form> */}

      <form
        // onSubmit={handleSubmit}
        action="https://sandbox.payfast.co.za/eng/process"
        method="post"
        target="_blank"
      >
        <label>
          Enter your name:
          <input type="text" />
        </label>

        <label>
          Enter your name:
          {/* <input type="hidden" name="merchant_id" value="25721561" />
          <input type="hidden" name="merchant_key" value="8idqkt0txofit" /> */}
          <input type="hidden" name="merchant_id" value="10035913" />
          <input type="hidden" name="merchant_key" value="gziocj2qtdukm" />
          <input type="hidden" name="item_name" value="special" />
          <input type="hidden" name="payment_method" value="ef" />
        </label>

        <label>
          Total Payable:
          <input
            type="text"
            name="amount"
            value={countTotalPrice()}
            onChange={(e) => {
              {
                payable;
              }
            }}
          />
          {/* <div>{countTotalPrice()}</div> */}
        </label>

        {/* <input type="hidden" name="return_url" value="/" />
      <input type="hidden" name="cancel_url" value="/" /> */}

        <label>Total Payable:</label>
        <input
          type="submit"
          className="bg-red-500 py-2 px-5 rounded-lg text-white"
          value="Pay Now"
        />
      </form>
    </>
  );
};

export default page;
