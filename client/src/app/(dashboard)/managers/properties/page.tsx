import { Metadata } from "next";
import PropertiesClient from "./PropertiesClients";

export const metadata: Metadata = {
  title: "Properties - RENTAPP",
  description: "Start your journey to finding the perfect place to call home",
};

export default function PropertiesPage() {
  return <PropertiesClient />;
}
