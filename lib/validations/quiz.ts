import { z } from "zod";

export const quizSchema = z.object({
  familySize: z.number().min(1).max(10),
  dailyKm: z.number().min(1).max(500),
  roadType: z.enum(["city", "highway", "rough", "mixed"]),
  budget: z.number().min(300000).max(10000000),
  fuelType: z.string().nullable().optional(),
  hasDriver: z.boolean()
});

export type QuizSchemaType = z.infer<typeof quizSchema>;
