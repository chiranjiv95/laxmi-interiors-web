"use client";

import { useForm } from "react-hook-form";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import axios from "axios";

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log("Form Data:", data);
    try {
      const response = await axios.post("/api/contact", data);
      console.log("response", response);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Something went wrong!");
      }
      throw new Error("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 bg-white p-6 shadow-md rounded-xl"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
        />

        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="1234567890"
          {...register("phone", {
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter a valid 10-digit Indian phone number",
            },
          })}
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          rows={4}
          {...register("message", {
            required: "Message is required",
          })}
        />

        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
