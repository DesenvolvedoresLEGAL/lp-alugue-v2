
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "@/components/landing/HeroSection";
import LogoCarousel from "@/components/landing/LogoCarousel";
import ProblemSolution from "@/components/landing/ProblemSolution";
import PricingTable from "@/components/landing/PricingTable";
import TestimonialVideo from "@/components/landing/TestimonialVideo";
import CustomerReviews from "@/components/landing/CustomerReviews";
import HowItWorks from "@/components/landing/HowItWorks";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQ from "@/components/landing/FAQ";
import CTASection from "@/components/landing/CTASection";
import MobileStickyCTA from "@/components/landing/MobileStickyCTA";
import Footer from "@/components/landing/Footer";

const HighConversionLanding = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Service JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluguel de Internet 5G para Eventos",
    "description": "Internet 5G super-rápida para eventos, com instalação em até 60 minutos e suporte 24/7.",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL",
      "url": "https://operadora.legal"
    },
    "areaServed": "Brasil",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planos de Internet para Eventos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Internet 5G Diária"
          },
          "price": "1499",
          "priceCurrency": "BRL"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Internet 5G Semanal"
          },
          "price": "5990",
          "priceCurrency": "BRL"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Internet 5G Mensal"
          },
          "price": "14990",
          "priceCurrency": "BRL"
        }
      ]
    }
  };

  // Review JSON-LD Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Internet 5G para Eventos LEGAL",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "João Carlos"
        },
        "reviewBody": "Contratamos a LEGAL para um evento com mais de 3.000 pessoas e foi impressionante a velocidade da internet mesmo com todos conectados."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Ana Beatriz"
        },
        "reviewBody": "Já perdi as contas de quantas vezes a internet oficial do pavilhão nos deixou na mão. Com a LEGAL, nunca mais passamos por esse problema."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Aluguel de Internet 5G para Eventos | Instale em 60 min e Tenha 10× Performance</title>
        <meta name="description" content="Conecte seu evento com 5G super-rápido. Instalação em 1 hora, suporte 24/7 e garantia LEGAL. Solicite seu orçamento agora!" />
        <meta property="og:title" content="Aluguel de Internet 5G para Eventos | Instale em 60 min e Tenha 10× Performance" />
        <meta property="og:description" content="Conecte seu evento com 5G super-rápido. Instalação em 1 hora, suporte 24/7 e garantia LEGAL. Solicite seu orçamento agora!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder.svg" /> {/* Replace with hero image */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Aluguel de Internet 5G para Eventos | Instale em 60 min e Tenha 10× Performance" />
        <meta property="twitter:description" content="Conecte seu evento com 5G super-rápido. Instalação em 1 hora, suporte 24/7 e garantia LEGAL. Solicite seu orçamento agora!" />
        <meta property="twitter:image" content="/placeholder.svg" /> {/* Replace with hero image */}
        
        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>

        {/* A/B Testing Meta */}
        <meta name="ab-test-name" content="LP-Alugue-HC-vB" />
        <meta name="ab-test-variant" content="B" />
      </Helmet>

      <div id="hero-section">
        <HeroSection />
      </div>
      <LogoCarousel />
      <ProblemSolution />
      <PricingTable />
      {/* <TestimonialVideo /> */}
      <CustomerReviews />
      <HowItWorks />
      <GuaranteeSection />
      <FAQ />
      <CTASection />
      <MobileStickyCTA />
      <Footer />
    </>
  );
};

export default HighConversionLanding;
