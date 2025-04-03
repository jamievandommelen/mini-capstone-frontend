import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Redirect to home or another page after successful sign-up.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-semibold text-center text-green-700 mb-6">Sign Up</h1>

        <ul className="text-red-600 text-sm mb-4">
          {errors.map((error, index) => (
            <li key={index} className="my-2">
              {error}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg text-green-600 mb-2">
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-green-600 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-lg text-green-600 mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password_confirmation" className="block text-lg text-green-600 mb-2">
              Confirm Password
            </label>
            <input
              name="password_confirmation"
              type="password"
              id="password_confirmation"
              className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
