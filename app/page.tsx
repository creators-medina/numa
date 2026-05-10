import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import EventCategories from "@/components/home/EventCategories";
import TheExperience from "@/components/home/TheExperience";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import HowItWorks from "@/components/home/HowItWorks";
import CTABand from "@/components/home/CTABand";

export const metadata: Metadata = {
  title: "Nüma Açaí — Premium Açaí Event Catering",
  description:
    "Nüma Açaí brings a premium, on-site açaí pop-up to your wedding, bridal shower, corporate event, or private celebration. Custom quoted for every gathering.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventCategories />
      <TheExperience />
      <GalleryPreview />
      <TestimonialsPreview />
      <HowItWorks />
      <CTABand />
    </>
  );
}
