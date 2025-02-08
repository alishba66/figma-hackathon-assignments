"use client";

import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const sanitizedSearchQuery = searchQuery.trim().toLowerCase().replace(/\s+/g, '-');
      // Use the slug to create the URL for the product page
      window.location.href = `/s-work/${sanitizedSearchQuery}`;
    }
  };

  return (
    <div className="bg-white">
      {/* Main Navigation */}
      <div className="flex justify-between items-center max-w-7xl w-full mx-auto px-4 md:px-20 lg:px-40 py-3 gap-4">
        {/* Logo */}
        <div className="w-full md:w-auto text-3xl font-bold flex items-center">
          Hekto
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10">
          <Link href={'/'}>
            <li>
              <span className="text-pink-600">Home</span>
            </li>
          </Link>
          <Link href={'/aboutus'}>
            <li>Pages</li>
          </Link>
          <Link href='/s-work'>
            <li>Products</li>
          </Link>
          <Link href='/blog'>
            <li>Blog</li>
          </Link>
          <Link href='/cart'>
            <li>Shop</li>
          </Link>
          <Link href='/contact'>
            <li>Contact</li>
          </Link>
        </ul>

        {/* Search Bar */}
        <div className="relative flex items-center">
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              className="w-[200px] md:w-[250px] py-1 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
              placeholder="Search Products..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="bg-pink-600 text-white px-3 py-1 rounded-md ml-2 hover:bg-pink-700 focus:outline-none"
            >
              <IoSearchSharp />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nav;
