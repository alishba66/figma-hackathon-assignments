"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export interface Product {
  _id: string;
  name: string;
  price: number;
  image?: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
}

const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const router = useRouter();
  const { q } = router.query; // Extract query from the URL

  // Helper function to get query string safely
  const getQuery = () => {
    if (Array.isArray(q)) {
      return q[0]; // Get the first element if it's an array
    }
    return q as string; // Cast to string if it's already a string
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
        // If no search query, show all products
        if (!q || getQuery().trim() === "") {
          setFilteredProducts(fetchedProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [q]); // Re-fetch products if the query changes

  // Filter products by search query
  useEffect(() => {
    const query = getQuery(); // Get the search query safely
    if (query && query.trim()) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
      );
      setFilteredProducts(filtered);
    }
  }, [q, products]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Search Results
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              href={`/s-work/${product.slug.current}`}
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
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
