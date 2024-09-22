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

import setNewPWD from "empyreanui/apiServices/users/useNewPassword";

import { Loader2 } from "lucide-react";

// Define the schema for form validation using zod

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .max(16, {
        message: "Password must be below 16 characters.",
      }),
    confirm: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .max(16, {
        message: "Password must be below 16 characters.",
      }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export default function SETFORGOTPWD() {
  // Destructure state and functions from the useSignin hook
  const [data, loading, error, setPWD] = setNewPWD();
  // Initialize form handling with react-hook-form and zod for validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Function to handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    setPWD(values);
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              {/* Display error message if any */}
              <FormMessage>
                {form.formState.errors.password?.message ||
                  (error?.password && error?.password)}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm</FormLabel>
              <FormControl>
                <Input placeholder="Confirm" type="password" {...field} />
              </FormControl>
              {/* Display error message if any */}
              <FormMessage>
                {form.formState.errors.confirm?.message ||
                  (error?.confirm && error?.confirm)}
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
        <span className="text-sm text-red-700">
          {error?.message && error?.message}
        </span>
      </form>
    </Form>
  );
}
