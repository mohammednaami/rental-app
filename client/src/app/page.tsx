import Navbar from "@/components/general/Navbar";
import Landing from "./(nondashboard)/landing/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'RentApp - Start your journey to finding the perfect place to call home',
  description: "Explore our wide range of rental properties tailored to fit your lifestyle and needs!",
};
export default function Home() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <main className={`h-full flex w-full flex-col`}>
        <Landing />
      </main>
    </div>
  );
}
