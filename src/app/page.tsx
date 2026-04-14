"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { MessageCircle, TrendingUp, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="subtle-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Results",
          id: "metrics",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Vantage Social"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "sparkles-gradient",
      }}
      title="Scale Your Influence, Dominate The Feed."
      description="Premium social media management and creative growth strategy for modern brands. Turn followers into loyal customers."
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/bar-graph-statistics-analysis-business-concept_53876-128027.jpg",
          imageAlt: "tech agency dashboard dark",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/social-media-communication-community-global-concept_53876-64987.jpg",
          imageAlt: "creative studio marketing team",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/life-motivation-inspiratin-positive-vibes-quote-flower-blue-sky-background_53876-120769.jpg",
          imageAlt: "viral content abstract network",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-hands-holding-smartphone_23-2149652149.jpg",
          imageAlt: "smartphone social app sleek",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/innovation-development-rocket-graphic-concept_53876-120019.jpg",
          imageAlt: "3d social media icons dark",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-casino-architecture_23-2150926645.jpg",
          imageAlt: "modern office building dusk",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "150M+",
          title: "Total Reach",
          description: "Audience reach delivered monthly",
          icon: Users,
        },
        {
          id: "2",
          value: "4.2x",
          title: "Average ROAS",
          description: "Return on ad spend growth",
          icon: TrendingUp,
        },
        {
          id: "3",
          value: "285%",
          title: "Avg Engagement",
          description: "Increase in community activity",
          icon: MessageCircle,
        },
      ]}
      title="The Numbers That Matter"
      description="Measurable impact that drives actual business growth, not just vanity metrics."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "1",
          title: "Viral Content Strategy",
          author: "Creative Lab",
          description: "Data-driven creative content that captures and converts your audience.",
          tags: [
            "Creative",
            "Strategy",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904328.jpg",
          imageAlt: "saas marketing tool ui",
        },
        {
          id: "2",
          title: "Influencer Management",
          author: "Partner Ops",
          description: "Building authentic long-term partnerships with high-value brand ambassadors.",
          tags: [
            "Influencers",
            "Partnerships",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/male-creator-editing-video-montage_482257-127200.jpg",
          imageAlt: "content creation studio cinematic",
        },
        {
          id: "3",
          title: "Performance Ad Ops",
          author: "Paid Team",
          description: "Expertly managed ad campaigns focused on lowering your acquisition cost.",
          tags: [
            "Ads",
            "Performance",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-orange-lights-background_1017-2785.jpg",
          imageAlt: "digital marketing data analytics",
        },
      ]}
      title="Strategic Creative Solutions"
      description="We bridge the gap between creative art and scientific growth tactics."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Vantage Social transformed our entire digital presence. Our engagement rates doubled within the first quarter. Truly elite professionals."
      rating={5}
      author="Sarah Jenkins, CEO of LuxHome"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg",
          alt: "woman professional headshot",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiley-business-man_23-2148514859.jpg",
          alt: "man professional headshot",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg",
          alt: "woman professional headshot",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-serious-businessman-white-shirt-looking-camera-standing-confident_1258-26762.jpg",
          alt: "man professional headshot",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-business-woman-portrait-outdoors_23-2148603027.jpg",
          alt: "woman professional headshot",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Let's Scale"
      title="Ready to own the feed?"
      description="Partner with the agency that grows brands. Reach out today for a consultation."
      buttons={[
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/landmarks-shanghai_1359-1099.jpg"
      logoText="Vantage Social"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Creative",
              href: "#",
            },
            {
              label: "Performance",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      imageAlt="dark city skyline night"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
