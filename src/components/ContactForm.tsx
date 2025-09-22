"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast, { LoaderIcon } from "react-hot-toast";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";

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
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!executeRecaptcha) {
      console.error("ReCaptcha execution function not available");
      toast.error(
        "Unable to verify you are human. Please refresh and try again."
      );
      return;
    }

    setSubmitting(true);

    try {
      // recaptcha Check
      const gReCaptchaToken = await executeRecaptcha("contactSubmit");

      const response = await axios.post(
        "/api/recaptchaSubmit",
        { token: gReCaptchaToken },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { success, score } = response.data;

      if (!success || score < 0.5) {
        toast.error("reCAPTCHA verification failed. Please try again.");
        return;
      }

      // Send email if user is verified
      await axios.post("/api/email", values, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Your message was sent successfully!");
      form.reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Submission failed:",
          error.response?.data || error.message
        );
        toast.error(
          error.response?.data?.message ||
            "Error sending your message. Please try again later."
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
        className="space-y-5 max-w-5xl mx-auto py-10"
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

        <FormDescription>
          This form is protected by reCAPTCHA. Google’s{" "}
          <Link
            href="https://policies.google.com/privacy?hl=en"
            target="_blank"
            className="text-link"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="https://policies.google.com/terms?hl=en"
            target="_blank"
            className="text-link"
          >
            Terms of Service
          </Link>{" "}
          apply.
        </FormDescription>

        <Button
          type="submit"
          className="text-base hover:scale-110 active:scale-95"
          size="lg"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <LoaderIcon />
              Submitting
            </>
          ) : (
            <>
              <Send />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
