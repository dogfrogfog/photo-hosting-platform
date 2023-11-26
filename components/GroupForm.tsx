"use client";
import { MultipleFilesSelector } from "@/components/MultipleFilesSelector";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { DatePickerWithRange } from "@/components/ui/rangeDatePicker";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  filmModel: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  to: z.date().nullable(),
  from: z.date().nullable(),
  photos: z.array(z.any()).min(1),
});

export function GroupForm({ onSubmit }: any) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      filmModel: "",
      to: null,
      from: null,
      photos: [],
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      console.log(values);
      // await onSubmit(values);
      // form.reset();
      // toast({
      //   description: `Group "${values.name}" created 🎉!`,
      // });
      // router.push("/gallery");
    } catch (e) {
      console.log("failed to create group");
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="Trip to Hamburg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>description</FormLabel>
              <FormControl>
                <Textarea
                  disabled={isLoading}
                  placeholder="Type your text here."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="filmModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>film model</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="Kodak GOLD"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="to"
          render={() => (
            <FormItem>
              <FormLabel>time frame</FormLabel>
              <FormControl>
                <DatePickerWithRange disabled={isLoading} {...form} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="photos"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photos</FormLabel>
              <FormControl>
                <MultipleFilesSelector field={field} form={form} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
