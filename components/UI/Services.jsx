import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Web Development" icon="ri-computer-line" />
                <ServicesItem
                  title="Building internal tools and applications"
                  icon="ri-apps-line"
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
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              I provide a range of services to clients, including software
              development, maintenance, and troubleshooting. I work closely with
              clients to understand their requirements, develop software
              solutions that meet their needs, and ensure that the software is
              delivered on time and within budget. I am proficient in various
              programming languages, frameworks, and tools, and I use this
              knowledge to write efficient and reliable code. I also have
              experience in debugging software issues and optimizing software
              performance. Additionally, I stay up-to-date with the latest
              technologies and best practices to deliver high-quality software
              solutions that meet industry standards.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
