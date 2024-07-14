"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "empyreanui/components/ui/form";
import { Input } from "empyreanui/components/ui/input";
import useSignin from "empyreanui/apiServices/loginUser";
import { Loader, Loader2 } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(16, { message: "Password must be below 16 characters." }),
});

export default function Login() {
  const [data, loading, error, submitLoginForm] = useSignin();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // email: "",
      // password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    submitLoginForm(values);
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-[400px] rounded-2xl  w-full *:space-y-1 "
      >
        <h1 className="text-3xl font-medium">LOGIN</h1>
        <p className="!mt-1 text-xs">
          Enter your email and password to login to your account
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>

              <FormMessage>{error?.email && error.email}</FormMessage>
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

              <FormMessage>{error?.password && error.password}</FormMessage>
            </FormItem>
          )}
        />
        <button
          className="bg-primary p-1 py-1.5 w-full rounded-md text-primary-foreground font-semibold  disabled:opacity-70"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <p className="flex items-center justify-center gap-1.5">
              {" "}
              Submitting <Loader2 size={14} className="animate-spin" />
            </p>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <p className="mt-1.5">
        Don&apos;t Have an account?{" "}
        <Link className="text-blue-700" href="/signup">
          Sign up
        </Link>{" "}
      </p>
    </Form>
  );
}
