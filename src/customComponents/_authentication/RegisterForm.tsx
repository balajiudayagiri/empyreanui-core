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
import { Loader2 } from "lucide-react";
import useSignup from "empyreanui/apiServices/users/createUser";
import { Button } from "empyreanui/components/ui/button";
import Link from "next/link";

// Define the schema for form validation using zod
const formSchema = z
  .object({
    firstname: z.string().nonempty({ message: "Firstname is required" }),
    lastname: z.string().nonempty({ message: "Lastname is required" }),
    username: z.string().nonempty({ message: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .max(16, { message: "Password must be below 16 characters." }),
    confirm: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .max(16, { message: "Password must be below 16 characters." }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

/**
 * Register Component for user registration form.
 *
 * This component renders a registration form using react-hook-form and zod for validation.
 * It handles form submission and displays loading state and errors.
 *
 * @returns {JSX.Element} Register component JSX
 */
export default function Register(): JSX.Element {
  const [data, loading, error, submitRegisterForm] = useSignup();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Function to handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    submitRegisterForm(values);
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-2 max-w-[400px] p-3 py-5 rounded-2xl w-full"
      >
        <div>
          <h1 className="text-3xl font-medium uppercase">Register</h1>
          {/* Optional description */}
        </div>
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firstname</FormLabel>
              <FormControl>
                <Input placeholder="Firstname" type="text" {...field} />
              </FormControl>
              <FormMessage>
                {form.formState.errors.firstname?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input placeholder="Lastname" type="text" {...field} />
              </FormControl>
              <FormMessage>
                {form.formState.errors.lastname?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" type="text" {...field} />
              </FormControl>
              <FormMessage>
                {form.formState.errors.username?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage>
                {form.formState.errors.password?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.confirm?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button
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
        </Button>
      </form>
      <p>
        Have an account?{" "}
        <Link className="text-blue-700" href="/signin">
          Sign in
        </Link>
      </p>
    </Form>
  );
}
