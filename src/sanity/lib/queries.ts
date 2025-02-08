import {groq} from "next-sanity";

export const allProducts=groq `*[_type == "product"]`;
export const four = groq `[_type == "product"][0..3]`;

export const singleProductQuery=groq`*[_type == "product"][0] {
    _id,
    name,
    image,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
  }`
  