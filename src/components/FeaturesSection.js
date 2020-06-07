import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Card from "react-bootstrap/Card";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        ></SectionHeader>
        <Card>
          <Features
            columns={2}
            imageRatio="4by3"
            items={[
              {
                title: "Purpose Built Platform",
                body:
                  "Only platform in the market to address the needs that cities need in times of in times of disasters.",
                image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg",
              },
              {
                title: "Granular Resource Visibility",
                body:
                  "Get the level of detail you need on your resources to address your needs quickly",
                image: "https://uploads.divjoy.com/undraw-directions_x53j.svg",
              },
              {
                title: "Superior Optimization",
                body:
                  "Lightning Fast Resource Optimization Algorithm to get your resources where they need to be up to 85% faster",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",
              },
              {
                title: "Equipped for the Future",
                body:
                  "Built on top of Redhat Openshift and integrated with IBM Watson Artificial Intelligence to provide help for the now and decades to come",
                image:
                  "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
              },
            ]}
          ></Features>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
