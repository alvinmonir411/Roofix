"use client";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("name", { required: true, minLength: 2 })}
        placeholder="Your Name"
        className="border p-2 w-full rounded"
      />
      {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

      <input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        placeholder="Email"
        className="border p-2 w-full rounded"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">Valid email is required</p>
      )}

      <input
        {...register("phone", { required: true, minLength: 10 })}
        placeholder="Phone"
        className="border p-2 w-full rounded"
      />
      {errors.phone && (
        <p className="text-red-500 text-sm">Valid phone is required</p>
      )}

      <textarea
        {...register("message", { required: true, minLength: 10 })}
        placeholder="Message"
        className="border p-2 w-full rounded h-32"
      />
      {errors.message && (
        <p className="text-red-500 text-sm">
          Message must be at least 10 characters
        </p>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
}
