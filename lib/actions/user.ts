"use server";

import prisma from "@/lib/db/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function toggleSaveCar(carId: string) {
  const session = await auth();

  if (!session?.user?.id) {
    return { error: "You must be logged in to save cars." };
  }

  const userId = session.user.id;

  try {
    const existing = await prisma.savedCar.findUnique({
      where: {
        userId_carId: {
          userId,
          carId,
        },
      },
    });

    if (existing) {
      await prisma.savedCar.delete({
        where: {
          id: existing.id,
        },
      });
      revalidatePath("/dashboard");
      revalidatePath("/cars");
      return { success: "Car removed from favorites", isSaved: false };
    } else {
      await prisma.savedCar.create({
        data: {
          userId,
          carId,
        },
      });
      revalidatePath("/dashboard");
      revalidatePath("/cars");
      return { success: "Car saved to favorites", isSaved: true };
    }
  } catch (error) {
    console.error("Error toggling saved car:", error);
    return { error: "Failed to update favorites" };
  }
}

export async function getSavedCars() {
  const session = await auth();

  if (!session?.user?.id) {
    return [];
  }

  const saved = await prisma.savedCar.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      car: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return saved.map((s) => s.car);
}
