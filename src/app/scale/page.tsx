import Hero from "@/components/hero";
import scaleImg from 'public/scale.jpg'

export default function ScalePage() {
  return (
    <Hero imgData={scaleImg} imgAlt="Bu is bizim isimiz" imgTitle="All things are ok"/>
  );
}