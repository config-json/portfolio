import { redirect } from "next/navigation";
import work from "@/data/work.json";

export default function Work() {
  redirect(`/work/${work[0].name}`);
}
