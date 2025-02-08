"use client";
import React, { useEffect, useState } from "react";
import { getCartItems } from "../action/action";
import { Product } from "../../../types/product";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/imageurl";
import { CgChevronRight } from "react-icons/cg";


const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    const items = getCartItems() || []; // ✅ Ensures it's always an array
    setCartItems(items);
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * (item.stockLevel || 1),
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setErrors(errors);
    return !Object.values(errors).some((val) => val === true);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      alert("Order placed successfully! 🎉");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link href="/cart" className="text-[#666666] hover:text-black transition text-sm">
              Cart
            </Link>
            <CgChevronRight />
            <span>Checkout</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            {cartItems.length > 0 ? (
  cartItems.map((item) => (
    <div key={item._id} className="flex items-center gap-4 py-3 border-b">
      <div className="w-16 h-16 rounded overflow-hidden">
        {item.image?.asset?._ref ? (
          <Image
            src={urlFor(item.image.asset._ref).url()}
            alt={item.name || "Product Image"}
            width={50}
            height={50}
            className="object-cover w-full h-full"
          />
        ) : (
          <p>No Image</p>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium">{item.name}</h3>
        <p className="text-xs text-gray-500">Quantity: {item.stockLevel}</p>
      </div>
      <p>${(item.price * (item.stockLevel || 1)).toFixed(2)}</p>
    </div>
  ))
) : (
  <p className="text-xs font-medium">No items in cart</p>
)}
            <div className="text-right pt-4">
              <p className="text-sm">Subtotal: <span className="font-medium">${subTotal.toFixed(2)}</span></p>
              <p className="text-sm">Discount: <span className="font-medium">${discount.toFixed(2)}</span></p>
              <p className="text-lg font-semibold">Total: ${(subTotal - discount).toFixed(2)}</p>
            </div>
          </div>

          {/* Billing Information */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: "firstName", label: "First Name" },
                { id: "lastName", label: "Last Name" },
                { id: "address", label: "Address" },
                { id: "email", label: "Email" },
                { id: "phone", label: "Phone Number" },
                { id: "zipCode", label: "Zip Code" },
                { id: "city", label: "City" },
              ].map(({ id, label }) => (
                <div key={id}>
                  <label htmlFor={id}>{label}</label>
                  <input
                    type="text"
                    id={id}
                    placeholder={`Enter Your ${label}`}
                    value={formValues[id as keyof typeof formValues]}
                    onChange={handleInputChange}
                    className="border w-full px-2 py-1 rounded"
                  />
                  {formErrors[id as keyof typeof formErrors] && (
                    <p className="text-sm text-red-500">{label} is required</p>
                  )}
                </div>
              ))}
            </div>
            <button
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
