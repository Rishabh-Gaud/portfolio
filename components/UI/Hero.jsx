import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/profile.jpeg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Rishabh Kumar Gaud</h2>
              <h5 className="mb-4">Full-Stack Engineer</h5>
              <p>
                I am highly motivated and dedicated to my work, with a keen eye
                for detail and a passion for delivering high-quality results. I
                am a quick learner and always eager to take on new challenges
                and expand my skill set. I am committed to continuous
                improvement and staying up-to-date with the latest industry
                trends and best practices in software development.
              </p>
              <div className="mt-5">
                {/* <button className="primary__btn">
                  <Link href="#">Hire me</Link>
                </button> */}

{/*                 <button className="secondary__btn">
                  <Link target="_blank" href="https://drive.google.com/file/d/1vXIBkfQTC4L9hGXE7raU-hnskxzgF1zn/view">Download Resume</Link>
                </button> */}
                <h2>Connect with me</h2>
<p align="left">
<a href="https://linkedin.com/in/rishabhgaud7800" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="rishabhgaud7800" height="30" width="40" /></a>
<a href="https://www.facebook.com/profile.php?id=100010337352255" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="rishabh gaud" height="30" width="40" /></a>
<a href="https://instagram.com/riishabhgaud" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="riishabhgaud" height="30" width="40" /></a>
<a href="https://www.hackerrank.com/rishabh78150891" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="rishabh78150891" height="30" width="40" /></a>
<a href="https://www.leetcode.com/rishabh-gaud" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="rishabh-gaud" height="30" width="40" /></a>
<a href="https://discord.gg/Rishabh#9774" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="Rishabh#9774" height="30" width="40" /></a>
</p>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">1 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
