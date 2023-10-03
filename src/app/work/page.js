"use client";

import { useParams, redirect } from "next/navigation";
import work from "../data/work.json";

export default function Works() {
  const slug = useParams();

  if (slug.type === undefined) {
    redirect("/work/ember-finance");
  }

  return null;
}
