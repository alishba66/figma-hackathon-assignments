"use client";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import GoBackButton from "@/components/GoBackButton";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../../action/action";
import Swal from "sweetalert2";
import Head from "next/head";

// Product interface
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
  slug: {
    _type: "slug";
    current: string;
  };
  description?: string;
  stockLevel?: number;
}

const handleAddToCart = (product: Product) => {
  if (product.stockLevel && product.stockLevel > 0) {
    const productWithStock = {
      ...product,
      stockLevel: product.stockLevel ?? 1,
    };

    addToCart(productWithStock);

    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
  } else {
    Swal.fire({
      position: "top-right",
      icon: "error",
      title: "Out of Stock",
      text: `Sorry, ${product.name} is currently out of stock!`,
      showConfirmButton: true,
    });
  }
};

interface ProductPagesProps {
  params: { slug: string };
}

// Fetch product data
async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = await client.fetch(
      groq`*[_type == "product" && slug.current == $slug][0]`,
      { slug }
    );
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Product Page Component
export default async function ProductPage({ params }: ProductPagesProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Product Not Found</h1>
        <p className="text-gray-600 mt-2">Sorry, we couldn’t find the product you were looking for.</p>
        <GoBackButton />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} | My Store</title>
        <meta name="description" content={product.description || "Product details"} />
      </Head>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Image */}
          <div className="w-full flex justify-center">
            {product.image?.asset ? (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image Available
              </div>
            )}
          </div>

          {/* Right Section - Details */}
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-sm font-semibold mt-4 text-gray-900">{product.description}</p>
            <p className="text-2xl font-semibold text-blue-600">
              {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : "Price not available"}
            </p>

            {/* Customer Reviews */}
            <div className="flex items-center text-gray-500 text-sm mt-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 bottom-5 relative" />
              ))}
              <span className="right-16 relative">5 Customer Reviews</span>
            </div>

            {/* Add to Cart Button */}
            <button
              className="mt-4 py-3 px-6 w-full sm:w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
