"use client";
import App from "./_components/monitors/src/App.js";
import HomeData from "./_components/HomeData.jsx"
import { React, useState, useEffect } from "react";

export default function Home() {
  return (
    <main className="relative h-screen">
      <App />
      <HomeData />
    </main>
  );
}
