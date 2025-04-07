// app/search/[id]/page.tsx
import { Metadata } from "next";
import SingleListingClient from "./SingleListingClient";


export const metadata: Metadata = {
  title: "Listing - RENTAPP",
  description: "Start your journey to finding the perfect place to call home",
};

export default function SingleListingPage() {
  return <SingleListingClient />;
}
