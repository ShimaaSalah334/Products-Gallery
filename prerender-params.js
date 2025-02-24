const fetch = require("node-fetch");

module.exports = async function getPrerenderParams() {
  try {
    // Fetch product IDs from API
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    // Extract IDs and return in the required format
    return products.map((product) => ({ id: String(product.id) }));
  } catch (error) {
    console.error("Error fetching product IDs for prerendering:", error);
    return [];
  }
};
