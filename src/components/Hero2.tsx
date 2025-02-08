
"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/imageurl";
import Image from "next/image";

export default function FeaturedProducts() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await client.fetch(
          `*[_type == "product" && isFeaturedProduct == true] {
            name,
            "image": image.asset._ref,
            price,
            category
          }[0..3]`
        );
        setData(products);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-6">Loading featured products...</div>;

  if (!data || data.length === 0) {
    return <div className="text-center py-6 text-gray-500">No featured products found.</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-3xl pt-3 text-center">Featured Products</h1>
      <div className="flex justify-center space-x-4 p-4 bg-gray-100">
        {data.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-64"
          >
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={200}
              height={200}
              className="h-40 w-full object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-xl font-bold mt-1">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


























// 'use client';

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/imageurl";
// import Image from "next/image";

// export default async ({ params }: { params?: { id?: string } }) => {
//   const data = await client.fetch(
//     `*[_type == "product" && isFeaturedProduct == true] {
//       name,
//       "image": image.asset._ref,
//       price,
//       category
//     }[0..3]`
//   );

//   if (!data || data.length === 0) {
//     return <div>No featured products found.</div>;
//   }

//   return (
//     <div>
//       <h1 className="font-bold text-3xl pt-3 ml-96">Featured product</h1>
//       <div className="flex justify-center space-x-4 p-4 bg-gray-100">
//         {data.map((product: any, index: number) => (
//           <div
//             key={index}
//             className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-64"
//           >
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.name}
//               width={200}
//               height={200}
//               className="h-40 w-full object-cover rounded-lg"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-500">{product.category}</p>
//             <p className="text-xl font-bold mt-1">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
