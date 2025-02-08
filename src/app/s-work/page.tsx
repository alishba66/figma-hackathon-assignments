"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export interface Product {
  _id: string;
  name: string;
  _type: "product";
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  price: number;
  description?: string;
  slug: {
    current: string;
  };
}

const Furniture = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();

    // Get existing cart from local storage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Add new product to cart
    cart.push(product);

    // Save updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show success message
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Latest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            href={`/s-work/${product.slug?.current || "default-slug"}`}
            key={product._id}
            passHref
          >
            <div className="border rounded-lg shadow-md p-5 hover:shadow-xl transition duration-300 bg-white cursor-pointer transform hover:scale-105">
              {product.image?.asset && (
                <div className="w-full h-52 overflow-hidden rounded-md">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <h2 className="text-lg font-semibold mt-4 text-gray-900">
                {product.name}
              </h2>
              <p className="text-gray-500 mt-2">
                {product.price
                  ? `$${Number(product.price).toFixed(2)}`
                  : "Price not available"}
              </p>
              <button
                className="mt-4 w-full py-2 px-4 text-white font-medium rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform duration-300"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Furniture;

