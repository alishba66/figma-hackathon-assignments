
"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/imageurl";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function DiscountProductPage() {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDiscountProduct() {
      try {
        const data = await client.fetch(
          `*[_type == "product" && isDiscountProduct == true][0] {
            name,
            "image": image.asset._ref,
            price,
            category
          }`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching discount product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDiscountProduct();
  }, []);

  if (loading) return <div className="text-center py-6">Loading discount product...</div>;

  if (!product) {
    return <div className="text-center py-6 text-gray-500">No discount product found.</div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <h1 className="font-bold text-3xl text-center mb-6">Discount Product</h1>
      <div className="flex justify-center items-center gap-8 bg-gray-100 p-6 rounded-lg">
        {/* Product Section */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-64">
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={200}
            height={200}
            className="h-40 w-full object-cover rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-xl font-bold mt-2">${product.price}</p>
        </div>

        {/* Discount Details Section */}
        <div className="max-w-lg">
          <h1 className="text-2xl text-blue-950 font-bold mb-4">
            20% Discount On All Products
          </h1>
          <p className="text-xl text-pink-600 font-medium mb-6">
            {product.name}
          </p>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            eugiat habitasse nec, bibendum condimentum.
          </p>

          <div className="flex flex-col gap-4">
            <div className="text-lg font-normal text-gray-500 flex items-center gap-2">
              <FaCheck /> Material expose like metals
            </div>
            <div className="text-lg font-normal text-gray-500 flex items-center gap-2">
              <FaCheck /> Clear lines and geometric figures
            </div>
            <div className="text-lg font-normal text-gray-500 flex items-center gap-2">
              <FaCheck /> Simple neutral colours
            </div>
          </div>

          <div className="mt-8">
            <Link href="./s-work">
              <button className="w-48 h-14 rounded bg-pink-700 text-white text-base">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}








































// 'use client';

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/imageurl";
// import Image from "next/image";
// import { FaCheck } from "react-icons/fa";
// import Link from 'next/link'


// export default async function DiscountProductPage() {
//   const product = await client.fetch(
//     `*[_type == "product" && isDiscountProduct == true][0] {
//       name,
//       "image": image.asset._ref,
//       price,
//       category
//     }`
//   );

//   if (!product) {
//     return <div>No featured products found.</div>;
//   }

//   return (
//     <div className="max-w-[1200px] mx-auto px-4 py-6">
//       <h1 className="font-bold text-3xl text-center mb-6">Discount Product</h1>
//       <div className="flex justify-center items-center gap-8 bg-gray-100 p-6 rounded-lg">
//         {/* Product Section */}
//         <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-64">
//           <Image
//             src={urlFor(product.image).url()}
//             alt={product.name}
//             width={200}
//             height={200}
//             className="h-40 w-full object-cover rounded-lg"
//           />
//           <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
//           <p className="text-gray-500">{product.category}</p>
//           <p className="text-xl font-bold mt-2">${product.price}</p>
//         </div>

//         {/* Discount Details Section */}
//         <div className="max-w-lg">
//           <h1 className="text-2xl text-blue-950 font-bold mb-4">
//             20% Discount On All Products
//           </h1>
//           <p className="text-xl text-pink-600 font-medium mb-6">
//             {product.name}
//           </p>
//           <p className="text-gray-500 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
//             eugiat habitasse nec, bibendum condimentum.
//           </p>

//           <div className="flex flex-col gap-4">
//             <div className="text-lg font-normal text-gray-500 flex items-center gap-2">
//               <FaCheck /> Material expose like metals
//             </div>
//             <div className="text-lg font-normal text-gray-500 flex items-center gap-2">
//               <FaCheck /> Clear lines and geometric figures
//             </div>
//             <div className="text-lg font-normal text-gray-500 flex items-center gap-2">
//               <FaCheck /> Simple neutral colours
//             </div>
//           </div>

//           <div className="mt-8">
//            <Link href ={'./s-work'}><button className="w-48 h-14 rounded bg-pink-700 text-white text-base">
//               Shop Now
//             </button></Link> 
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }