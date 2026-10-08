import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

if (!process.env.BETTER_AUTH_DB) {
    throw new Error("BETTER_AUTH_DB environment variable missing!");
}

const client = new MongoClient(process.env.BETTER_AUTH_DB);
const db = client.db("bazar-dor-db");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true,
    },
});