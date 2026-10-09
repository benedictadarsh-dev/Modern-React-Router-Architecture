import React from "react";
import { useOutletContext, Form, useNavigation } from "react-router-dom";
import { MessageSquare, Star, Send, User, ThumbsUp } from "lucide-react";

export default function ProductReviews() {
  const { product } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const reviews = product.reviews || [];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-indigo-400" />
            <span>Verified Customer Feedback</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Nested Child Route Path: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">/products/{product.id}/reviews</code>
          </p>
        </div>
        <div className="text-xs text-slate-400">
          Showing {reviews.length} verified reviews
        </div>
      </div>

      {/* Review Submission Form with React Router Action */}
      <div className="rounded-xl bg-slate-800/40 border border-slate-700/60 p-5">
        <h3 className="text-sm font-semibold text-slate-200 mb-3 flex items-center space-x-1.5">
          <Star className="w-4 h-4 text-amber-400" />
          <span>Submit a Review (React Router Action)</span>
        </h3>
        <Form method="post" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Your Name / Handle</label>
              <input
                type="text"
                name="author"
                required
                placeholder="e.g. SystemArchitect_Dan"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Rating</label>
              <select
                name="rating"
                defaultValue="5"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="5">5 - Excellent (Highly Recommended)</option>
                <option value="4">4 - Very Good</option>
                <option value="3">3 - Average</option>
                <option value="2">2 - Below Expectations</option>
                <option value="1">1 - Poor</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Your Review</label>
            <textarea
              name="comment"
              required
              rows={3}
              placeholder="Share performance benchmarks, ergonomics or user impressions..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-semibold shadow-md transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSubmitting ? "Submitting review..." : "Post Review"}</span>
          </button>
        </Form>
      </div>

      {/* Review List */}
      <div className="space-y-4">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="rounded-xl bg-slate-800/60 border border-slate-700/50 p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">{rev.author}</div>
                  <div className="text-[10px] text-slate-500">{rev.date}</div>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < rev.rating ? "text-amber-400 fill-amber-400" : "text-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pl-9">
              {rev.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
