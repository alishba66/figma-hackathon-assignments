"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/imageurl";
import Image from "next/image";

// Define the Product Type
interface Product {
  name: string;
  image: string;
  price: number;
  category: string;
}

export default function Hero6() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const products: Product[] = await client.fetch(
          `*[_type == "product" && isFeatured == true] {
            name,
            "image": image.asset._ref,
            price,
            category
          }`
        );
        setData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-6">Loading...</div>;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <h1 className="font-bold text-3xl text-center mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((product, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
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
        ))}
      </div>
    </div>
  );
}










