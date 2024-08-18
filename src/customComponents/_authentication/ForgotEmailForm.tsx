"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "empyreanui/components/ui/form";
import { Input } from "empyreanui/components/ui/input";
import useGetForgotOtp from "empyreanui/apiServices/users/getForgotOtp";
import { Loader2 } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "empyreanui/Providers/user-provider";
// Define the schema for form validation using zod
const formSchema = z.object({
  email: z.string().email("Invalid email address."),
});

export default function ForgotEmail() {
  // Destructure state and functions from the useSignin hook
  const [data, loading, error, submitMail] = useGetForgotOtp();
  // Initialize form handling with react-hook-form and zod for validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Function to handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    submitMail(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-[400px] rounded-2xl w-full"
      >
        {/* <h1 className="text-3xl font-medium">LOGIN</h1>
        <p className="!mt-1 text-xs">
          Enter your email and password to login to your account
        </p> */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              {/* Display error message if any */}
              <FormMessage>
                {form.formState.errors.email?.message ||
                  (error?.email && error?.email)}
              </FormMessage>
            </FormItem>
          )}
        />

        <button
          className="bg-primary p-1 py-1.5 w-full rounded-md text-primary-foreground font-semibold disabled:opacity-70"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <p className="flex items-center justify-center gap-1.5">
              Submitting <Loader2 size={14} className="animate-spin" />
            </p>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </Form>
  );
}
