"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Links from "./Links";
export default function MobileNavbar() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="right-10 top-10 z-50 order-1 lg:hidden">
          <Hamburger size={35} toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="order-0 flex flex-col items-center justify-center font-rachelya lg:hidden">
          <span className="text-4xl sm:text-6xl">ELISA DAOLIO</span>
          <span className="text-md w-fit font-anaheimregular tracking-[6px] sm:text-xl sm:tracking-[13px]">
            ARTETERAPEUTA
          </span>
        </div>
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={isOpen ? { x: 0 } : { x: "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-white"
      >
        <Links mobile={true} />
      </motion.div>
    </>
  );
}
