"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/imageurl";
import { useRouter } from "next/navigation";



const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!", 
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.stockLevel + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) handleQuantityChange(id, product.stockLevel - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
  };
const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");

        router.push("/checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
            >
              {item.image && (
                <Image
                  src={urlFor(item.image.asset._ref).url()}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded-md"
                />
              )}

              <div className="flex-1 ml-4">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-600">
                  ${typeof item.price === "number" ? item.price.toFixed(2) : "N/A"}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                >
                  -
                </button>
                <span>{item.stockLevel}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleRemove(item._id)}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <p className="text-xl font-semibold">
              Total: <span className="text-green-600">${calculateTotal().toFixed(2)}</span>
            </p>
            <button
              onClick={handleProceed}
              className="px-6 py-3 mt-4 md:mt-0 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
