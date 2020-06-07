import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useAuth } from "./../util/auth.js";
import "./DashboardPlaceholder.scss";
import Card1 from "./../components/Card1";
import Card2 from "./../components/Card2";
import Card3 from "./../components/Card3";


function CardSection(props) {
  const auth = useAuth();
  if (!auth.user) return null;

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center mt-5">
          <Col className="mt-5 mt-lg-0">
            <Card1 />
          </Col>
          <Col className="mt-5 mt-lg-0">
            <Card2 />
          </Col>
          <Col className="mt-5 mt-lg-0">
            <Card3 />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default CardSection;
