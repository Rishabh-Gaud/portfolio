import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";

const Work = () => {
  return (
    <section id="services">
      <Container>
        <SectionSubtitle subtitle="💼 WORK EXPERIENCE" />
        <Row>
          <Col className={`${classes.service__title}`}>
            <h3 className="mb-2 mt-4">Medibuddy</h3>
            <h4 className="mb-4">SDE Intern </h4>
              <ul>
                <li>
                  Built Healthcity from scratch providing a platform for vendors
                  to onboard and sell products to users with a user-friendly
                  vendor onboarding process.
                </li>
                <li>
                  Utilised Postgres for data storage and Redis for caching,
                  while utilizing Google Analytics and CleaverTap to track user
                  behavior and improve the overall user experience of the
                  Healthcity.
                </li>
                <li>
                  Utilized Retool to develop a vendor onboarding tool that was
                  both user-friendly and efficient.
                </li>
                <li>
                  Created Dynamic Banner Service to provide a continuous
                  integration service in order to automate the entire process of
                  changing the banner
                </li>
              </ul>
          </Col>
        </Row>
        <Row>
          <Col className={`${classes.service__title}`}>
            <h3 className="mb-2 mt-4">
              Semicolon - coding club of NIT Srinagar
            </h3>
            <h4 className="mb-4">Tech Lead </h4>
              <ul>
                <li>
                  Organized and executed multiple technical coding events like
                  CodeVita, Technophilia, Feb-Fest, etc. where I took on the
                  responsibility of curating the problem statements for
                  participants.
                </li>
                <li>
                  Led chapter of 20+ members to work towards goals that improve
                  and promote coding culture in college.
                </li>
                <li>
                  Analyzing existing activities and scheduling meetings to
                  discuss improvements.
                </li>
              </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Work;
