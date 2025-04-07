import { Metadata } from "next";
import NewPropertyClient from "./NewPropertyClients";

export const metadata: Metadata = {
  title: "New Property - RENTAPP",
  description: "Start your journey to finding the perfect place to call home",
};

export default function NewPropertyPage() {
  return <NewPropertyClient />;
}
