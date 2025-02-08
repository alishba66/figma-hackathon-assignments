import { Rule } from "sanity";

const productSchema = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Product Name",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "category" }],
    },
    {
      name: "isTrendingProduct",
      type: "boolean",
      title: "Trending Product",
    },
    {
      name: "isDiscountProduct",
      type: "boolean",
      title: "Discount Product",
    },
    {
      name: "top",
      type: "boolean",
      title: "Featured Product",
    },
    {
      name: "image",
      type: "image",
      title: "Product Image",
      options: { hotspot: true },
    },
  ],
};

export default productSchema;
