const axios = require("axios");

module.exports = async function getPrerenderParams() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const productIds = response.data.map((product) => ({
      id: product.id.toString(),
    }));
    return productIds;
  } catch (error) {
    console.error("Error fetching product IDs:", error);
    return [];
  }
};
