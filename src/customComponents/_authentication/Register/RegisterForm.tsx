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
} from "kodebloxui/components/ui/form";
import { Input } from "kodebloxui/components/ui/input";
import { Loader, Loader2 } from "lucide-react";
import useSignup from "kodebloxui/apiServices/users/createUser";
import { Button } from "kodebloxui/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "kodebloxui/Providers/user-provider";
import MODALS_CONSTANTS from "kodebloxui/constants/MODAL_CONSTANTS.json";
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
  const pathname = usePathname();
  const { setModalInfo } = useContext(UserContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Function to handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    submitRegisterForm(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-2 max-w-[400px] px-3  rounded-2xl w-full">
        <div>{/* Optional description */}</div>
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
                {form.formState.errors.firstname?.message ||
                  (error?.firstname && error?.firstname)}
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
                {form.formState.errors.lastname?.message ||
                  (error?.lastname && error?.lastname)}
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
                {form.formState.errors.username?.message ||
                  (error?.username && error?.username)}
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
          disabled={loading}>
          {loading ? (
            <p className="flex items-center justify-center gap-1.5">
              <Loader size={14} className="animate-spin" /> Submitting
            </p>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
      <p className="mt-1 ml-3 text-xs">
        Have an account?{" "}
        {pathname === "/signup" ? (
          <Link className="text-primary" href="/signin">
            Sign in
          </Link>
        ) : (
          <span
            className="text-primary cursor-pointer"
            onClick={() =>
              setModalInfo({
                isOpen: true,
                modalName: MODALS_CONSTANTS.SIGNIN_MODAL,
              })
            }>
            Sign in
          </span>
        )}
      </p>
    </Form>
  );
}
