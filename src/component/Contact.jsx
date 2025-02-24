import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    setIsLoading(true);
    try {
      await axios.post("https://getform.io/f/avrrjowa", userInfo);
      toast.success("Your message has been sent!");
     
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 md:mt-10">
      <h1 className="text-3xl font-semibold">Contact Me</h1>
      <p className="text-lg text-gray-600">Please fill out the form below to contact me.</p>
      <div className="flex flex-col items-center justify-center mt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-100 w-full max-w-md px-8 py-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Send Your Message</h2>

          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">Full Name is required</span>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">Email is required</span>
            )}
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="w-full px-3 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">Message is required</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-2 text-white font-semibold rounded-lg shadow-md ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoading?  "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
