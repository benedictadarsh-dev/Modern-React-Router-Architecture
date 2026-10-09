import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import ProductsLayout from "./routes/ProductsLayout";
import ProductList from "./routes/ProductList";
import ProductDetail from "./routes/ProductDetail";
import ProductOverview from "./routes/ProductOverview";
import ProductInventory from "./routes/ProductInventory";
import ProductReviews from "./routes/ProductReviews";
import Analytics from "./routes/Analytics";
import NotFound from "./routes/NotFound";
import ErrorPage from "./routes/ErrorPage";

import { 
  getProducts, 
  getProductById, 
  getAnalyticsData, 
  addProductReview 
} from "./api/productsApi";

// 1. Products Catalog Loader (Pre-fetches catalog based on search params)
export async function productsLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  const currentCategory = url.searchParams.get("category") || "all";
  const products = await getProducts(query, currentCategory);
  return { products, query, currentCategory };
}

// 2. Product Detail Loader (Extracts :productId param, fetches item before render, throws 404 if missing)
export async function productDetailLoader({ params }) {
  const product = await getProductById(params.productId);
  return product;
}

// 3. Analytics Loader (Fetches aggregated telemetry before render)
export async function analyticsLoader() {
  return await getAnalyticsData();
}

// 4. Product Review Action (Handles review form submissions and triggers automatic revalidation)
export async function productReviewAction({ request, params }) {
  const formData = await request.formData();
  const author = formData.get("author");
  const rating = formData.get("rating");
  const comment = formData.get("comment");
  await addProductReview(params.productId, { author, rating, comment });
  return { success: true };
}

// Define the comprehensive React Router tree
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductsLayout />,
        children: [
          {
            index: true,
            element: <ProductList />,
            loader: productsLoader,
          },
          {
            path: ":productId",
            element: <ProductDetail />,
            loader: productDetailLoader,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <ProductOverview />,
              },
              {
                path: "inventory",
                element: <ProductInventory />,
              },
              {
                path: "reviews",
                element: <ProductReviews />,
                action: productReviewAction,
              },
            ],
          },
        ],
      },
      {
        path: "analytics",
        element: <Analytics />,
        loader: analyticsLoader,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
