"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Product {
  name: string;
  image?: string;
  price: number;
  category: string;
}

export default function TrendingProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrendingProducts() {
      try {
        const products: Product[] = await client.fetch(
          `*[_type == "product" && topCatergory == true] {
            name,
            "image": image.asset._ref,
            price,
            category
          }[0..3]`
        );
        setData(products);
      } catch (error) {
        console.error("Error fetching trending products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingProducts();
  }, []);

  if (loading) return <div className="text-center py-6">Loading categories...</div>;

  if (!data || data.length === 0) {
    return <div className="text-center py-6 text-gray-500">No categories found.</div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <h1 className="font-bold text-2xl text-center mb-6">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4"
          >
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={150}
                height={150}
                className="w-40 h-40 object-contain rounded-lg"
              />
            )}
            <h2 className="text-md font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}




































