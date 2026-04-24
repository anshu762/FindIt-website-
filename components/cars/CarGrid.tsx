"use client";

import CarCard from "@/components/cars/CarCard";
import type { CarWithScore } from "@/types";
import { motion } from "framer-motion";

interface CarGridProps {
  cars: CarWithScore[];
  animate?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 }
};

export default function CarGrid({ cars, animate = false }: CarGridProps) {
  if (!animate) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
    >
      {cars.map((car) => (
        <motion.div key={car.id} variants={itemVariants}>
          <CarCard car={car} />
        </motion.div>
      ))}
    </motion.div>
  );
}
