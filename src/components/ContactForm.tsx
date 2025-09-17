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
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const formSchema = z.object({
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

  const { executeRecaptcha } = useGoogleReCaptcha();

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("Success!");
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-5xl mx-auto py-10"
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
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="text-base tracking-widest gradient-3 hover:opacity-80"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
