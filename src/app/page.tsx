'use client';
import Header from "@/app/components/Header";
import IntroCard from "@/app/components/IntroCard";
import AboutMe from "@/app/components/AboutMe";
import ContactMe from "@/app/components/ContactMe";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <IntroCard />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}
