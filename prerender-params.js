const axios = require("axios");

module.exports = async function getPrerenderParams() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;

    return products.map((product) => ({ id: product.id.toString() }));
  } catch (error) {
    console.error("Error fetching product IDs for prerendering:", error);
    return [];
  }
};
