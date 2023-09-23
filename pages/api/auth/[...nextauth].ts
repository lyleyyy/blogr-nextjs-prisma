import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import prisma from "../../../lib/prisma";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GitHubProvider({
      // clientId: process.env.GITHUB_ID,
      clientId: "09f6bb41cdc39ad9f432",
      // clientSecret: process.env.GITHUB_SECRET,
      clientSecret: "acc2df79fd2789aadaa8ca635a71c70b3bd758da",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  // secret: process.env.SECRET,
};
