"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/imageurl";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  imageUrl: string;
}

export default function FeaturedProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const products: Product[] = await client.fetch(
          `*[_type == "product" && top == true] {
            _id,
            name,
            "imageUrl": image.asset._ref
          }`
        );
        setData(products);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="w-full bg-[#F2F0FF] py-6 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="flex-shrink-0">
          <Image
            src="/1 pics.png"
            alt="Main Image"
            width={387}
            height={387}
            className="w-full max-w-[387px] object-contain"
          />
        </div>

        {/* Middle Section */}
        <div className="text-center md:text-left mt-6 md:mt-0 md:ml-10">
          <p className="text-pink-600">Best Furniture For Your Castle...</p>
          <h2 className="text-black text-2xl md:text-3xl font-bold">
            New Furniture Collection Trends in 2020
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
            adipiscing in phasellus non in justo.
          </p>
          <Link href="./s-work">
            <button className="mt-6 px-6 py-3 bg-[#FB2E86] text-white rounded-md">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="relative mt-6 md:mt-0">
          {/* Discount Tag */}
          <p className="absolute top-6 left-20 text-xl font-bold text-white">
            50% off
          </p>
          <Image src="/50.png" alt="Discount" width={90} height={90} className="ml-20" />

          {/* Featured Products */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            {loading ? (
              <p>Loading featured products...</p>
            ) : data.length === 0 ? (
              <p>No featured products found.</p>
            ) : (
              data.map((product: Product) => (
                <div key={product._id} className="w-[250px]">
                  <Image
                    src={urlFor(product.imageUrl).url()}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="w-full object-contain rounded-lg"
                  />
                  <p className="text-center mt-2 text-sm text-gray-700">{product.name}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



























