import { redirect } from "next/navigation";
import work from "@/data/work.json";

export default function Trade() {
  redirect(`/work/${work[0].name}`);
}
