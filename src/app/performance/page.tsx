import Hero from "@/components/hero";
import perfImg from 'public/performance.jpg'

export default function PerformancePage() {
  return (
    <Hero imgData={perfImg} imgAlt="Bu is bizim isimiz" imgTitle="All things are ok"/>
  );
}