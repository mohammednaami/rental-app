"use client";
import React from "react";
import { motion } from "framer-motion";
import FeaturesCard from "./FeaturesCard";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const FeaturesSecion = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white">
      <div className="max-w-4xl xl:mx-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto">
          Quickly find the home you want using our effective search filters!
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center">
              <FeaturesCard
                imageSrc={`/landing-search${3 - index}.png`}
                title={
                  [
                    "Trustworthy and Verified Listings",
                    "Browse Rental Listings with Ease",
                    "Simplify Your Rental Search with Advanced",
                  ][index]
                }
                description={
                  [
                    "We verify all listings to ensure you have a safe and secure rental experience.",
                    "Quickly find the perfect rental property with our easy-to-use search filters.",
                    "Search filters that help you find the perfect rental property tailored to your needs.",
                  ][index]
                }
                linkText={["Explore","Search","Discover"][index]}
                linkHref={["/explore","/search","/discover"][index]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSecion;
