"use client";

import { useForm } from "react-hook-form";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          type="text"
          placeholder="Your Name"
          {...register("name")}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <Input
          id="phone"
          type="tel"
          placeholder="9876543210"
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          rows={4}
          {...register("message")}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
