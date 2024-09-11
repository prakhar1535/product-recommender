import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { prompt } = req.body;

      // Replace this with actual Gemini API call
      const response = await axios.post(
        "https://api.gemini.com/v1/chat/completions",
        {
          model: "gemini-pro",
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const products = extractProductsFromResponse(
        response.data.choices[0].message.content
      );

      res.status(200).json({ products });
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      res.status(500).json({ error: "Error processing your request" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function extractProductsFromResponse(content) {
  // Implement logic to extract product names from Gemini API response
  // This is a placeholder implementation
  return content.split(",").map((item) => item.trim());
}
