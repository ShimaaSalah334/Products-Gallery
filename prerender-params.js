const axios = require("axios");

module.exports = async function getPrerenderParams() {
  try {
    // Fetch products from your API
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;

    // Map product IDs for prerendering
    return products.map((product) => ({ id: String(product.id) }));
  } catch (error) {
    console.error("Error fetching product IDs for prerendering:", error);
    return [];
  }
};
