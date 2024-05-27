"use client";
import { useState, useEffect } from "react";
import { fetchReviews, saveReview } from "@/lib/contentful"; // Adjust the import path as needed

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    comment: "",
  });

  useEffect(() => {
    async function getReviews() {
      const allReviews = await fetchReviews();
      setReviews(allReviews);
    }
    getReviews();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveReview(formData);
      setFormData({
        name: "",
        email: "",
        rating: "",
        comment: "",
      });
      const allReviews = await fetchReviews();
      setReviews(allReviews);
    } catch (error) {
      console.error("Error saving review:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10 bg-[#070505] text-white">
      <h1 className="text-3xl font-bold p-10">Reviews</h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="comment">
            Comment
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          className="bg-[#86A7DF] hover:bg-[#5482d2] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="w-full mt-10">
        {reviews.length === 0 ? (
          <p>No reviews available.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="mb-6 p-4 border rounded shadow">
              <h3 className="text-xl font-bold">{review.name}</h3>
              <p className="text-sm">{review.email}</p>
              <p className="text-lg">Rating: {review.rating}</p>
              <p className="text-base">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
