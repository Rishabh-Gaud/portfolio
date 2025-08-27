import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";


import classes from "../../styles/about.module.css";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1vXIBkfQTC4L9hGXE7raU-hnskxzgF1zn/view";
    link.download =
      "https://drive.google.com/file/d/1vXIBkfQTC4L9hGXE7raU-hnskxzgF1zn/view";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about" aria-labelledby="about-heading">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h2 id="about-heading" className="mt-4 mb-4">I&apos;m here to help your next project</h2>
            <p>
              I am a Software Development Engineer with a BTech in Electronics and Communication 
              Engineering from NIT Srinagar (CGPA: 7.9). Currently working at CollegeIt since 
              September 2023, I have 2+ years of experience building scalable web applications 
              and AI-driven solutions.
            </p>
            <p>
              I specialize in full-stack development with expertise in JavaScript, TypeScript, 
              Python, React, Next.js, Node.js, and cloud technologies. I have successfully 
              designed chat widgets for 10+ universities, built AI conversational applications 
              that increased conversions by 450%, and developed platforms serving 1,000+ active users.
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  AI & Machine Learning
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Full-Stack Development
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Cloud & DevOps
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>
              </div>
            </div>

            <div className="mt-5 d-flex gap-3 flex-wrap">
              <Link href="#portfolio" className="primary__btn">
                My Portfolio
              </Link>

              <Link 
                href="https://drive.google.com/file/d/1vXIBkfQTC4L9hGXE7raU-hnskxzgF1zn/view"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary__btn"
              >
                Download Resume
              </Link>
            </div>
          </Col>

          {/* <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img01} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img02} alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img03} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img04} alt="about-img" />
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default About;
