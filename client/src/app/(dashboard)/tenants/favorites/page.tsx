import FavoritesClient from "./FavoritesClients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites - RENTAPP",
  description: "Start your journey to finding the perfect place to call home",
};

export default function FavoritesPage() {
  return <FavoritesClient />;
}
