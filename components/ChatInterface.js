import React, { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function ChatInterface({ setCart, setBudget }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    setMessages([...messages, { text: input, sender: "user" }]);

    try {
      // Extract budget from input
      const budgetMatch = input.match(/budget (?:of )?\$?(\d+)/i);
      const totalBudget = budgetMatch ? parseInt(budgetMatch[1]) : 0;
      setBudget(totalBudget);

      // Query Gemini API for product suggestions
      const geminiResponse = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text: `Given the user input: "${input}", provide a comprehensive list of 5 essential Walmart products for this request. Include a variety of item types (e.g., furniture, decor, appliances) if applicable. Format the response as a JSON array of objects, where each object has a 'category' and an 'item' property. For example: [{"category": "Seating", "item": "Comfortable sofa"}, {"category": "Lighting", "item": "Floor lamp"}]`,
                },
              ],
            },
          ],
        },
      });

      const suggestedProducts = JSON.parse(
        geminiResponse.data.candidates[0].content.parts[0].text
      );

      // Calculate budget per item
      const budgetPerItem = totalBudget / suggestedProducts.length;

      // Query Walmart API for each suggested product
      const cartItems = [];
      const notFoundItems = [];
      for (const product of suggestedProducts) {
        const walmartResponse = await axios.post("/api/walmart", {
          title: product.item,
          budget: budgetPerItem,
        });

        if (
          walmartResponse.data.items &&
          walmartResponse.data.items.length > 0
        ) {
          cartItems.push({
            ...walmartResponse.data.items[0],
            category: product.category,
          });
        } else {
          notFoundItems.push(product);
        }
      }

      setCart(cartItems);

      let responseMessage = `Here are some essential items I found for you${
        totalBudget ? ` within a budget of $${totalBudget}` : ""
      }:\n`;
      responseMessage += cartItems
        .map(
          (item) =>
            `${item.category}: ${
              item.title
            } - $${item.pricing.currentPrice.toFixed(2)}`
        )
        .join("\n");

      if (notFoundItems.length > 0) {
        responseMessage += "\n\nI couldn't find the following items:\n";
        responseMessage += notFoundItems
          .map((item) => `${item.category}: ${item.item}`)
          .join("\n");
        responseMessage +=
          "\n\nYou might want to try alternative search terms for these items.";
      }

      if (cartItems.length === 0) {
        responseMessage =
          "I'm sorry, but I couldn't find any products matching your request within the specified budget. Could you try rephrasing your request or adjusting the budget?";
      }

      setMessages([
        ...messages,
        { text: input, sender: "user" },
        { text: responseMessage, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...messages,
        { text: input, sender: "user" },
        {
          text: "Sorry, there was an error processing your request. Please try again with different terms or categories.",
          sender: "bot",
        },
      ]);
    }

    setInput("");
    setIsGenerating(false);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg flex flex-col justify-between">
      <div className="h-96 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.sender === "user" ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow bg-gray-700 text-white p-2 rounded-l-lg focus:outline-none"
          placeholder="Enter your shopping request with budget (e.g., 'Living room essentials with budget $500')..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-r-lg disabled:bg-blue-400"
          disabled={isGenerating}
        >
          {isGenerating ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}
