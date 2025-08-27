import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services" className={`${classes.services__section}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="AI & Machine Learning" icon="ri-robot-line" />
                <ServicesItem
                  title="Cloud Architecture (AWS)"
                  icon="ri-cloud-line"
                />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Scalable Solutions,</h3>
            <h3 className="mb-4">Proven Results</h3>
            <p>
              <strong>Languages:</strong> C, C++, Python, JavaScript, TypeScript, Node.js, HTML/CSS3, SQL, Bash
              <br /><br />
              <strong>Technologies:</strong> React, Next.js, Redis, Tailwind, Express, FastAPI, Postgres, MongoDB, REST, WebSockets
              <br /><br />
              <strong>Tools:</strong> Git, Docker, AWS (EC2, S3, Lambda, SQS), Linux, CI/CD, Auth0, Langchain, LangGraph
              <br /><br />
              I specialize in building AI-driven applications, scalable web platforms, and cloud-native solutions. 
              My experience includes creating conversational AI systems, developing platforms for 1000+ users, 
              and implementing solutions that drive measurable business results.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
