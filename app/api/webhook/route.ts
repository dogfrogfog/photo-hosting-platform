import { UserJSON, WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

import { db, user } from "@/db";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  // @ts-ignore
  const {
    id,
    first_name,
    last_name,
    email_addresses,
    primary_email_address_id,
  } = evt.data as UserJSON;
  const eventType = evt.type;
  const clerkId = id as string;

  const primaryEmail = email_addresses.find(
    (email) => email.id === primary_email_address_id,
  )?.email_address;

  switch (eventType) {
    case "user.created":
      await db.insert(user).values({
        clerkId: id,
        firstName: first_name,
        lastName: last_name,
        email: primaryEmail,
        updatedAt: new Date(),
        createdAt: new Date(),
      });
      break;
    case "user.updated":
      await db
        .update(user)
        .set({
          firstName: first_name,
          lastName: last_name,
          email: primaryEmail,
          updatedAt: new Date(),
        })
        .where(eq(user.clerkId, clerkId));
      break;
    case "user.deleted":
      await db.delete(user).where(eq(user.clerkId, clerkId));
      break;
    default:
      return new Response("Error occured -- invalid event type", {
        status: 400,
      });
  }

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}
