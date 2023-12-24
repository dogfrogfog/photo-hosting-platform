"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  code: z.string().min(6, {
    message: "Code is too short.",
  }),
});

export function UserRoleForm({ onSubmit }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const attemptsCount =
    (localStorage &&
      parseInt(localStorage.getItem("premium_code_attempts") || "")) ||
    0;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await onSubmit(values);

      form.reset();
      toast({
        description: `You can use the app now, congrats my friend 🎉!`,
      });
      router.push(`/gallery`);
    } catch (e) {
      toast({
        description: `Code is wrong. Dont try to fool me 😛!`,
      });
      console.log("failed to updare user role");
      console.log(e);

      localStorage.setItem("premium_code_attempts", `${attemptsCount + 1}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Premium code to become power user</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="#############"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading || attemptsCount > 3} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
