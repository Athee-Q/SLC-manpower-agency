"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (err) {
      console.error("Submit failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="p-6 md:p-8 lg:p-10  min-w-11/12 mx-auto bg-text/50 dark:bg-dark-text rounded-2xl ">
      {submitted && (
        <p className="text-green-600 mb-4">Message sent successfully!</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            {...register("name", { required: true })}
            placeholder="Full Name"
            className="input"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="input"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            {...register("phone", { required: true })}
            placeholder="Phone Number"
            className="input"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">Phone is required</span>
          )}
        </div>

        {/* State */}
        <div className="flex flex-col">
          <label
            htmlFor="state"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            State/Region <span className="text-red-500">*</span>
          </label>
          <input
            id="state"
            {...register("state", { required: true })}
            placeholder="State/Region"
            className="input"
          />
          {errors.state && (
            <span className="text-red-500 text-sm">State is required</span>
          )}
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label
            htmlFor="country"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Country <span className="text-red-500">*</span>
          </label>
          <select
            id="country"
            {...register("country", { required: true })}
            className="input"
          >
            <option value="">Select Country</option>
            <option value="Singapore">Singapore</option>
            <option value="India">India</option>
          </select>
          {errors.country && (
            <span className="text-red-500 text-sm">Country is required</span>
          )}
        </div>

        {/* Reason for contacting */}
        <div className="flex flex-col">
          <label
            htmlFor="reason"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Reason for Contacting <span className="text-red-500">*</span>
          </label>
          <select
            id="reason"
            {...register("reason", { required: true })}
            className="input"
          >
            <option value="">Reason for contacting</option>
            <option value="Job Inquiry">Job Inquiry</option>
            <option value="Partnership">Partnership</option>
          </select>
          {errors.reason && (
            <span className="text-red-500 text-sm">Please select a reason</span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            How can we help you? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            rows={4}
            placeholder="Your message"
            className="input"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">Message is required</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          disabled={loading}
          type="submit"
          className="bg-accent dark:bg-dark-accent text-white font-bold p-3 rounded hover:opacity-90 transition"
        >
          {loading ? "Sending..." : "Contact Us"}
        </button>
      </form>
    </section>
  );
}
