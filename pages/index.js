"use state";
import { useState } from "react";
import Head from "next/head";
import ChatInterface from "../components/ChatInterface";
import Cart from "../components/Cart";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [budget, setBudget] = useState(0);
  console.log(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Walmart Shopping Assistant</title>
        <meta
          name="description"
          content="AI-powered Walmart shopping assistant"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Walmart Shopping Assistant
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChatInterface setCart={setCart} setBudget={setBudget} />
          <Cart cart={cart} budget={budget} />
        </div>
      </main>

      <footer className="text-center py-4 mt-8 border-t border-gray-800">
        <p>&copy; 2024 Walmart Shopping Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
}
