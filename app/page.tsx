"use client";

import Heading from "@/components/heading";
import HomeCards from "@/components/home-cards";
import Navbar from "@/components/navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Heading />

      <div className="divider rounded-r-xl"></div>

      <HomeCards />
    </div>
  );
}
