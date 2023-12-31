"use client";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

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
  public: z.boolean().default(false),
});

export function GroupForm({
  onSubmit,
  initialData,
}: {
  onSubmit: any;
  initialData?: any;
}) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      filmModel: initialData?.filmModel || "",
      to: initialData?.to || null,
      from: initialData?.from || null,
      public: initialData?.public || false,
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { slug } = await onSubmit(values);

      form.reset();
      toast({
        description: `Group "${values.name}" created/updated 🎉!`,
      });
      router.push(`/g/${slug}`);
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
          name="public"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="leading-none">
                <FormLabel>You photos will be public.</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
          {!!initialData ? "Update" : "Create"}
        </Button>
      </form>
    </Form>
  );
}
