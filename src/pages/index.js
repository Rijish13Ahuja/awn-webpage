import Head from "next/head";
import Header from "../components/header";
import HeroSection from "@/components/heroSection";
import TopServices from "@/components/topServices";
import Gigs from "@/components/gigs";
import Companies from "@/components/companies";
import WhyAwn from "@/components/WhyAwn";
import NetworkDiagram from "@/components/NetworkDiagram";
import FooterContact from "@/components/FooterContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Header</title>
      </Head>
      <Header />
      <HeroSection/>
      <TopServices/>
      <Gigs/>
      <Companies/>
      <WhyAwn/>
      <NetworkDiagram/>
      <FooterContact/> 
      <Footer/> 
    </div>
  );
}
