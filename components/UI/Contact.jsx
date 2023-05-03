import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              I have delivered great user experiences to people. Well-versed
              with React, Javascript, and most of the Web frameworks.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Bangaluru, India</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>rishabh.kumbh@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+918287233813</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/Rishabh-Gaud/">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/rishabhgaud7800/">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://twitter.com/GaudRishabh">
                <i className="ri-twitter-line"></i>
              </Link>
              <Link href="https://www.youtube.com/@rishabhgaur2102/about">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://medium.com/@rishabh78150891">
                <i className="ri-medium-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
