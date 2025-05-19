"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();

  console.log({ user }, "user");

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      Header
    </header>
  );
};

export default Header;
