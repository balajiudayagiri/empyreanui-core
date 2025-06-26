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
} from "kodebloxui/components/ui/form";
import { Input } from "kodebloxui/components/ui/input";
import useSignin from "kodebloxui/apiServices/users/loginUser";
import { Loader } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "kodebloxui/Providers/user-provider";
import MODALS_CONSTANTS from "kodebloxui/constants/MODAL_CONSTANTS.json";
// Define the schema for form validation using zod
const formSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(16, {
      message: "Password must be below 16 characters.",
    }),
});

export default function Login() {
  // Destructure state and functions from the useSignin hook
  const [data, loading, error, submitLoginForm] = useSignin();
  const pathname = usePathname();
  const { setModalInfo } = useContext(UserContext);
  // Initialize form handling with react-hook-form and zod for validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Function to handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    submitLoginForm(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-[400px] rounded-2xl w-full">
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
        <button
          className="bg-primary p-1 py-1.5 w-full rounded-md text-primary-foreground font-semibold disabled:opacity-70"
          type="submit"
          disabled={loading}>
          {loading ? (
            <p className="flex items-center justify-center gap-1.5">
              <Loader size={14} className="animate-spin" /> Submitting
            </p>
          ) : (
            "Submit"
          )}
        </button>
        <span
          className="text-xs text-primary cursor-pointer"
          onClick={() => {
            setModalInfo({
              isOpen: true,
              modalName: MODALS_CONSTANTS.FP_EMAIL_MODAL,
            });
          }}>
          Forgot password?
        </span>
      </form>
      <p className="mt-1.5 text-xs">
        Don&apos;t Have an account?{" "}
        {pathname === "/signup" ? (
          <Link className="text-primary" href="/signup">
            Sign up
          </Link>
        ) : (
          <span
            className="text-primary cursor-pointer"
            onClick={() =>
              setModalInfo({
                isOpen: true,
                modalName: MODALS_CONSTANTS.SIGNUP_MODAL,
              })
            }>
            Sign up
          </span>
        )}
      </p>
    </Form>
  );
}
