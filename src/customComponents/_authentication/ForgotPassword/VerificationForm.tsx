"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { Button } from "kodebloxui/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "kodebloxui/components/ui/form";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "kodebloxui/components/ui/input-otp";

import VerifyOTP from "kodebloxui/apiServices/users/userVerificationPassword";

// Define the schema for OTP validation using zod
const FormSchema = z.object({
  pin: z.string().length(6, {
    message: "Your one-time password must be exactly 6 characters.",
  }),
});

export function ForgotVerifyForm() {
  const [data, loading, error, verifyOtp] = VerifyOTP();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  // Function to handle form submission
  function onSubmit(data: z.infer<typeof FormSchema>) {
    verifyOtp(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="*:border-primary">
                    {/* Render OTP slots */}
                    {[...Array(6)].map((_, index) => (
                      <InputOTPSlot key={index} index={index} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your email.
              </FormDescription>
              <FormMessage>{form.formState.errors.pin?.message}</FormMessage>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Verifying..." : "Submit"}
        </Button>
      </form>
      {data && <p className="text-green-500">OTP Verified Successfully!</p>}
      {error && <p className="text-red-500 text-sm">Error: {error.pin}</p>}
    </Form>
  );
}
