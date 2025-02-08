"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/imageurl";
import Image from "next/image";

interface Product {
  name: string;
  image: string;
  price: number;
  category: string;
}

export default function Hero9() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products: Product[] = await client.fetch(
          `*[_type == "product" && isHero9Product == true] {
            name,
            "image": image.asset._ref,
            price,
            category
          }[0..5]`
        );
        setData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-6">Loading products...</div>;

  if (!data || data.length === 0) {
    return <div className="text-center py-6 text-gray-500">No products found.</div>;
  }

  return (
    <div className="max-w-[900px] mx-auto px-4 py-6">
      <h1 className="font-bold text-2xl text-center mb-6">Hero9 Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4"
          >
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={150}
              height={150}
              className="w-40 h-40 object-contain rounded-lg"
            />
            <h2 className="text-md font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

























