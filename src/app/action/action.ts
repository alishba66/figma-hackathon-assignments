
import { Product } from "../../../types/product";

// Add product to the cart
export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const existingProductIndex = cart.findIndex(item => item._id === product._id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].stockLevel += 1; // Increment stock level for existing product
  } else {
    cart.push({
      ...product,
      stockLevel: 1, // Set default stock level to 1 for new product
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
};

// Remove product from the cart
export const removeFromCart = (productId: string) => {
  let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter(item => item._id !== productId); // Filter out the product by id
  localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to local storage
};

// Update product quantity in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const productIndex = cart.findIndex(item => item._id === productId);

  if (productIndex > -1) {
    cart[productIndex].stockLevel = quantity; // Update stock level
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to local storage
  }
};

// Get all cart items
export const getCartItems = (): Product[] => {
  return JSON.parse(localStorage.getItem('cart') || '[]'); // Return all cart items
};
