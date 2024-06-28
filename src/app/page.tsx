import Hero from "@/components/hero";
import homeImg from 'public/home.jpg'

export default function HomePage() {
  return (
    <Hero imgData={homeImg} imgAlt="Bu is bizim isimiz" imgTitle="All things are ok"/>
  );
}
