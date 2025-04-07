// app/search/[id]/page.tsx
import { Metadata } from "next";
import SingleListingClient from "./SingleListingClient";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Property not found");
    const property = await res.json();

    return {
      title: `${property.name} - RENTAPP`,
      description: property.description || "Explore property details and apply directly via RENTAPP.",
    };
  } catch (error) {
    return {
      title: "Listing not found - RENTAPP",
      description: "This property could not be loaded.",
    };
  }
}

export default function SingleListingPage() {
  return <SingleListingClient />;
}
