// app/search/page.tsx
import { Metadata } from "next";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
  title: "Search - RENTAPP",
  description: "Start your journey to finding the perfect place to call home",
};

export default function SearchPage() {

  return <SearchClient />;
}
