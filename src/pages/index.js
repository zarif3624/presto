import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ClientsSection from "./../components/ClientsSection";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="primary"
        textColor="light"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="The Marketplace built for Uncertain Times"
        subtitle="Our purpose is to enable you to optimally help your community. Request resources and offer what you can to help navigate the tough times."
        buttonText="Sign in"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      ></HeroSection>
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      ></FeaturesSection>
      <ClientsSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="You're in good company"
        subtitle=""
      ></ClientsSection>
    </>
  );
}

export default IndexPage;
