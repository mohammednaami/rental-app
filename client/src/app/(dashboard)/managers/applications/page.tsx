import { Metadata } from "next";
import ApplicationsClient from "./ApplicationsClients";

export const metadata: Metadata = {
  title: "Applications - RENTAPP",
  description: "Start your journey to finding the perfect place to call home",
};

export default function ManagerApplicationsPage() {
  return <ApplicationsClient />;
}
