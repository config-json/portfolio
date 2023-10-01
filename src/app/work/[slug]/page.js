"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function CurrentWork() {
  const slug = useParams();
  console.log(slug);

  return (
    <div>
      <p>Something</p>
    </div>
  );
}
