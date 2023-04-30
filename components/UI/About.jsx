import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import img01 from "../../public/images/img-01.jpg";
import img02 from "../../public/images/img-02.jpg";
import img03 from "../../public/images/img-03.jpg";
import img04 from "../../public/images/hero.jpg";

import classes from "../../styles/about.module.css";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1QJryry-Pl9e-309kw0BD9CQAcLGgS5N_/view?usp=sharing";
    link.download =
      "https://drive.google.com/file/d/1QJryry-Pl9e-309kw0BD9CQAcLGgS5N_/view?usp=sharing";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
                I am a final year BTech student from NIT Srinagar with a passion
                for software development. I have 6 months of experience as a
                software development engineer and have worked on several
                projects in various domains.
              </p>
              <p>
                My technical skills include proficiency in C++, JavaScript, and
                SQL. I am experienced in using various technologies and
                frameworks such as NestJs, NextJs, Redis, HTML/CSS, Tailwind,
                React, Node, Express, Postgres, and MongoDB. Additionally, I am
                experienced in using developer tools and platforms such as
                Retool, Postman, DBeaver, AWS s3, Google Analytics, Bitbucket,
                Github, and VS Code.
              </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>

              <button className="secondary__btn">
                <Link
                  href={"/#"
                  }
                  download={"https://drive.google.com/file/d/1QJryry-Pl9e-309kw0BD9CQAcLGgS5N_/view?usp=sharing"}
                >
                  Download CV
                </Link>
              </button>
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
