import { INITIAL_PRODUCTS, MOCK_ANALYTICS } from "../data/mockData";

// In-memory mutable store for dynamic additions during the session
let products = [...INITIAL_PRODUCTS];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProducts(searchQuery = "", category = "all") {
  await delay(250); // Simulate network latency to demonstrate loader execution
  let result = [...products];

  if (category && category !== "all") {
    result = result.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  if (searchQuery && searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase().trim();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q)
    );
  }

  return result;
}

export async function getProductById(productId) {
  await delay(200); // Simulate network latency
  const found = products.find((p) => p.id === productId);
  if (!found) {
    // Standard React Router throw pattern for 404
    throw new Response(`Product with ID "${productId}" was not found in catalog.`, {
      status: 404,
      statusText: "Product Not Found",
    });
  }
  return found;
}

export async function getAnalyticsData() {
  await delay(350); // Simulate heavier aggregation query
  return {
    ...MOCK_ANALYTICS,
    timestamp: new Date().toISOString(),
    totalInventoryUnits: products.reduce((sum, p) => sum + p.stock, 0),
    totalInventoryValue: products.reduce((sum, p) => sum + p.stock * p.price, 0)
  };
}

export async function addProductReview(productId, reviewData) {
  await delay(250);
  const prodIndex = products.findIndex((p) => p.id === productId);
  if (prodIndex === -1) {
    throw new Response("Cannot add review to non-existent product", { status: 404 });
  }

  const newReview = {
    id: `rev-${Date.now()}`,
    author: reviewData.author || "Anonymous Customer",
    rating: Number(reviewData.rating) || 5,
    date: new Date().toISOString().split("T")[0],
    comment: reviewData.comment || "Great product!"
  };

  products[prodIndex] = {
    ...products[prodIndex],
    reviews: [newReview, ...products[prodIndex].reviews]
  };

  return products[prodIndex];
}
