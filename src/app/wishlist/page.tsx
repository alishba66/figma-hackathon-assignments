import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Product {
  name: string;
  image?: string;
  price: number;
  category: string;
}

export default async function TrendingProducts() {
  const data: Product[] = await client.fetch(
    `*[_type == "product" && isTrendingProduct == true] {
      name,
      "image": image.asset._ref,
      price,
      category
    }[0..5]`
  );

  if (!data || data.length === 0) {
    return <div>No featured products found.</div>;
  }

  return (
    <div className="max-w-[900px] mx-auto px-4 py-6">
      <h1 className="font-bold text-2xl text-center mb-6">Wishlist Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((product: Product, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4"
          >
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={70}
                height={70}
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
