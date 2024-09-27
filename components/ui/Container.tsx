import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto pl-5 pr-5 sm:pl-10 sm:pr-10">
      {children}
    </div>
  );
}
