"use client";

import React from "react";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/atoms";
import { HiArrowRight } from "react-icons/hi2";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-24 max-w-[45rem] text-center px-4 text-sm sm:text-base leading-6 sm:leading-8"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from{" "}
        <span className="italic">Vocational High School</span> in the Department
        of <span className="font-medium">Computer and Network Engineering</span>
        , I decided to pursue my passion for programming. I'm{" "}
        <span className="underline">self-taught</span> and I enrolled in a
        coding bootcamp, learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the{" "}
        <span className="font-medium">problem-solving</span> aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          .NET, React, Node.js, and PostgreSQL
        </span>
        . I am familiar with Clean Architecture with CQRS Pattern and also
        Typescript and Prisma. I am always looking to learn new technologies. I
        am currently doing an <span className="font-medium">internship</span> as
        a web developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, hangout alone or with my friends, and when
        I was an intern, I really liked playing volleyball. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">investment and financial growth</span>.
      </p>
      <motion.div
        className="flex items-center justify-center px-4 text-lg font-medium mt-10 sm:mt-16"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
        }}
      >
        <div
          onClick={() => window.location.assign("/eka-do")}
          className="group bg-gradient-to-r from-[#fbe2e3] to-[#dbd7fb] shadow px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-neutral-700"
        >
          see what i cooked{" "}
          <HiArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </div>
      </motion.div>
    </motion.section>
  );
}
