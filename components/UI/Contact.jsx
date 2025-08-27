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
            <h3 className="mt-4 mb-4">Let&apos;s work together</h3>
            <p>
              I&apos;m a Software Development Engineer specializing in AI applications, 
              full-stack development, and scalable cloud solutions. Currently building 
              innovative solutions at CollegeIt for universities worldwide.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Jaunpur, Uttar Pradesh, India</p>
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
              <Link href="https://github.com/Rishabh-Gaud/" className={`${classes.social__link} ${classes.github}`}>
                <i className="ri-github-fill"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/rishabhgaud7800/" className={`${classes.social__link} ${classes.linkedin}`}>
                <i className="ri-linkedin-box-fill"></i>
              </Link>
              <Link href="https://twitter.com/GaudRishabh" className={`${classes.social__link} ${classes.twitter}`}>
                <i className="ri-twitter-fill"></i>
              </Link>
              <Link href="https://www.youtube.com/@rishabhgaur2102/about" className={`${classes.social__link} ${classes.youtube}`}>
                <i className="ri-youtube-fill"></i>
              </Link>
              <Link href="https://medium.com/@gaudrishabh" className={`${classes.social__link} ${classes.medium}`}>
                <i className="ri-medium-fill"></i>
              </Link>
              <Link href="https://leetcode.com/rishabh_gaud/" className={`${classes.social__link} ${classes.leetcode}`}>
                <span className={classes.leetcode__icon}>LC</span>
              </Link>
              <Link href="https://www.geeksforgeeks.org/user/rishabhgaud/" className={`${classes.social__link} ${classes.geeksforgeeks}`}>
                <span className={classes.gfg__icon}>GfG</span>
              </Link>
              <Link href="https://www.codechef.com/users/rishabh_gaud" className={`${classes.social__link} ${classes.codechef}`}>
                <span className={classes.codechef__icon}>CC</span>
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
