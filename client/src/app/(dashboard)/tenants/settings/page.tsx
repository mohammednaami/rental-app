import { Metadata } from "next";
import TenantSettingsClient from "./TenantSettingsClient";

export const metadata: Metadata = {
  title: "Settings - RENTAPP",
  description: "Start your journey to finding the perfect place to call home",
};

export default function SettingsPage() {
  return <TenantSettingsClient />;
}
