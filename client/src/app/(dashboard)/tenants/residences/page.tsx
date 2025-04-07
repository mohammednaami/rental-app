import { Metadata } from "next";
import ResidencesClient from "./ResidencesClient";

export const metadata: Metadata = {
  title: "Residences - RENTAPP",
  description: "Start your journey to finding the perfect place to call home",
};

export default function ResidencesPage() {
  return <ResidencesClient />;
}
