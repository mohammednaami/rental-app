import { Metadata } from "next";
import ManagerSettingsClient from "./ManagerSettingsClient";

export const metadata: Metadata = {
  title: "Settings - RENTAPP",
  description: "Start your journey to finding the perfect place to call home",
};

export default function ManagerSettingsPage() {
  return <ManagerSettingsClient />;
}
