
"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/imageurl";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

export default function DiscountProductPage() {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await client.fetch(
          `*[_type == "product" && unique == true][0] {
            name,
            "image": image.asset._ref,
            price,
            category
          }`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  if (loading) return <div className="text-center py-6">Loading discount product...</div>;

  if (!product) {
    return <div className="text-center py-6 text-gray-500">No featured products found.</div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <h1 className="font-bold text-3xl text-center mb-6">Discount Product</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-gray-100 p-6 rounded-lg">
        {/* Product Section */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full lg:w-64">
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

        {/* Unique Features Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left text-blue-900 sm:pl-12 mt-10 lg:mt-0">
          <div className="text-4xl font-semibold">
            Unique Features Of Latest &<br />
            Trending Products
          </div>
          <div className="text-sm mt-4 sm:mt-7">
            <div className="flex items-center text-pink-800">
              <GoDotFill />
              <p className="text-black ml-2">
                All frames constructed with hardwood solids and laminates
              </p>
            </div>
            <div className="flex items-center text-blue-800 mt-3">
              <GoDotFill />
              <p className="text-black ml-2">
                Reinforced with double wood dowels, glue, screw-nails corner
                blocks, and machine nails
              </p>
            </div>
            <div className="flex items-center text-green-500 mt-3">
              <GoDotFill />
              <p className="text-black ml-2">
                Arms, backs, and seats are structurally reinforced
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 mt-8">
            <Link href={"/cart"}>
              <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-md text-sm">
                Add To Cart
              </button>
            </Link>
            <p className="text-sm text-blue-900">
              B&B Italian Sofa <br /> $32.00
            </p>
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
// import { GoDotFill } from "react-icons/go"; // Added import for GoDotFill
// import Link from 'next/link'
// export default async function DiscountProductPage() {
//   const product = await client.fetch(
//     `*[_type == "product" && unique == true][0] {
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
//       <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-gray-100 p-6 rounded-lg">
//         {/* Product Section */}
//         <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full lg:w-64">
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

//         {/* Unique Features Section */}
//         <div className="w-full sm:w-1/2 text-center sm:text-left text-blue-900 sm:pl-12 mt-10 lg:mt-0">
//           <div className="text-4xl font-semibold">
//             Unique Features Of Latest &<br />
//             Trending Products
//           </div>
//           <div className="text-sm mt-4 sm:mt-7">
//             <div className="flex items-center text-pink-800">
//               <GoDotFill />
//               <p className="text-black ml-2">
//                 All frames constructed with hardwood solids and laminates
//               </p>
//             </div>
//             <div className="flex items-center text-blue-800 mt-3">
//               <GoDotFill />
//               <p className="text-black ml-2">
//                 Reinforced with double wood dowels, glue, screw-nails corner
//                 blocks, and machine nails
//               </p>
//             </div>
//             <div className="flex items-center text-green-500 mt-3">
//               <GoDotFill />
//               <p className="text-black ml-2">
//                 Arms, backs, and seats are structurally reinforced
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row items-center gap-5 mt-8">
//           <Link href={'./cart'}> <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-md text-sm">
//               Add To Cart
//             </button></Link> 
//             <p className="text-sm text-blue-900">
//               B&B Italian Sofa <br /> $32.00
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>)}