import { z } from "zod";

import { createTRPCRouter, publicProcedure, timedProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: timedProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
