"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/imageurl";
import Image from "next/image";

// Define Product Type
interface Product {
  name: string;
  image: string;
  price: number;
  category: string;
}

export default function LatestProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const products: Product[] = await client.fetch(
          `*[_type == "product" && isLatestProduct == true] {
            name,
            "image": image.asset._ref,
            price,
            category
          }[0..5]`
        );
        setData(products);
      } catch (error) {
        console.error("Error fetching latest products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-6">Loading latest products...</div>;

  if (!data || data.length === 0) {
    return <div className="text-center py-6 text-gray-500">No latest products found.</div>;
  }

  return (
    <div className="max-w-[90%] lg:max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="font-bold text-3xl text-center mb-8">Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4"
          >
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-auto object-contain rounded-lg"
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



















