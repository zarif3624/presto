import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Clients from "./Clients";

function ClientsSection(props) {
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
        <Clients
          items={[
            {
              name: "Instagram",
              image:
                "https://images.fineartamerica.com/images-medium-large-5/new-york-state-seal-movie-poster-prints.jpg",
              width: "140px",
            },
            {
              name: "Slack",
              image:
                "https://i.pinimg.com/originals/41/c4/39/41c4391c1bde5f909dbaff456863bd52.jpg",
              width: "135px",
            },
            {
              name: "Tinder",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/51HkCpAGvxL._AC_SX355_.jpg",
              width: "140px",
            },
            {
              name: "Spotify",
              image:
                "https://www2.illinois.gov/sites/gov/about/PublishingImages/Pages/default/state%20seal.PNG",
              width: "145px",
            },
          ]}
        ></Clients>
      </Container>
    </Section>
  );
}

export default ClientsSection;
