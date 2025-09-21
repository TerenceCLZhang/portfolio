"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast, { LoaderIcon } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Required" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Invalid email address",
    }),
  message: z.string().min(1, { message: "Required" }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setSubmitting(true);
    try {
      await axios.post("/api/email", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Your message was sent successfully!");
      form.reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Email sending failed:",
          error.response?.data || error.message
        );
        toast.error(
          error.response?.data?.message ||
            "Error sending email. Please try again later."
        );
      } else {
        console.error("Unexpected error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-5xl mx-auto py-10"
        aria-busy={submitting}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Full Name *</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="h-13 md:text-base placeholder:text-base bg-gray-800 border-3 border-gray-600"
                  placeholder="Enter your full name"
                  disabled={submitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Email *</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="h-13 md:text-base placeholder:text-base bg-gray-800 border-3 border-gray-600"
                  placeholder="Enter your email address"
                  inputMode="email"
                  disabled={submitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Message *</FormLabel>
              <FormControl>
                <Textarea
                  className=" h-50 max-h-100 md:text-base placeholder:text-base bg-gray-800 border-3 border-gray-600"
                  placeholder="Enter your message"
                  disabled={submitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="text-base tracking-widest hover:scale-110 active:scale-95"
          size="lg"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <LoaderIcon />
              Submitting
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
