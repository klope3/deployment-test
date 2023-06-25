import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
export const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const messages = await prisma.message.findMany();
  res.status(200).send(messages);
});

const port = process.env.PORT;
app.listen(port || 3000);
