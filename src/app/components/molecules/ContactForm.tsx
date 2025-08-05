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
      throw new Error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
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
        <label htmlFor="email">Email</label>
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
        <label htmlFor="phone">Phone</label>
        <Input
          id="phone"
          type="tel"
          placeholder="9876543210"
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
        <label htmlFor="message">Message</label>
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
