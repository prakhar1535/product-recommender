import { getJson } from "serpapi";
import * as dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.NEXT_PUBLIC_SERP_API_KEY;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { title, budget } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const params = {
      engine: "walmart",
      query: title,
      api_key: apiKey,
    };

    console.log("Request params:", params);
    const response = await getJson(params);
    console.log("Response from SerpAPI:", response);

    if (
      response.error ||
      (response.search_information &&
        response.search_information.organic_results_state === "Fully empty")
    ) {
      return res.status(200).json({ items: [] });
    }

    if (!response.organic_results || response.organic_results.length === 0) {
      return res.status(200).json({ items: [] });
    }

    const results = response.organic_results;
    const filteredResults = budget
      ? results.filter(
          (item) =>
            item.primary_offer &&
            item.primary_offer.offer_price &&
            item.primary_offer.offer_price <= budget
        )
      : results;

    const formattedResults = filteredResults.map((result) => ({
      title: result.title || null,
      description: result.description || null,
      image: result.thumbnail || null,
      pricing: {
        currentPrice: result.primary_offer
          ? result.primary_offer.offer_price
          : null,
        currency: result.primary_offer ? result.primary_offer.currency : null,
      },
      rating: result.rating || null,
      link: result.product_page_url || null, // Add the product link
    }));

    // Sort by price (ascending) and return the cheapest item within budget
    const sortedResults = formattedResults.sort(
      (a, b) => a.pricing.currentPrice - b.pricing.currentPrice
    );
    const cheapestItem = sortedResults.length > 0 ? [sortedResults[0]] : [];

    return res.status(200).json({ items: cheapestItem });
  } catch (error) {
    console.error("Error fetching data from SerpAPI:", error);
    return res.status(500).json({
      message: "Error fetching data from SerpAPI",
      error: error.message,
    });
  }
}
