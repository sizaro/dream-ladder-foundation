import {
  Hero,
  QuickActions,
  AboutPreview,
  MissionMessage,
  ProgramsPreview,
  ImpactStats,
  LatestUpdates,
  GalleryPreview,
  Testimonials,
  CallToAction,
} from "../../components/home/index.ts";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />

      <QuickActions />

      <AboutPreview />

      <MissionMessage />

      <ProgramsPreview />

      <ImpactStats />

      <LatestUpdates />

      <GalleryPreview />

      <Testimonials />

      <CallToAction />
    </main>
  );
}