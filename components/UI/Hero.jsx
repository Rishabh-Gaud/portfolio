import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/profile.jpeg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`} aria-labelledby="hero-heading">
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h1 id="hero-heading" className="mt-3 mb-3">I&apos;m Rishabh Kumar Gaud</h1>
              <h2 className="mb-4">Software Development Engineer</h2>
              <p>
                I am a passionate Software Development Engineer with expertise in React, Node.js, 
                Next.js, and AI-driven applications. Currently working at CollegeIt, I have built 
                chat widgets for 10+ universities and developed AI conversational applications that 
                increased admission lead conversions by 450%. I excel in full-stack development, 
                creating scalable solutions with modern technologies like Python, TypeScript, and AWS.
              </p>
              <div className="mt-5">
                <div className="d-flex gap-3 mb-4">
                  <Link href="/contact" className="primary__btn">
                    Hire me
                  </Link>
                  <Link 
                    target="_blank" 
                    href="https://drive.google.com/file/d/1vXIBkfQTC4L9hGXE7raU-hnskxzgF1zn/view" 
                    className="secondary__btn"
                  >
                    Download Resume
                  </Link>
                </div>
                
                <div className="social-links">
                  <h3 className="mb-3">Connect with me</h3>
                  <div className="d-flex gap-3 flex-wrap">
                    <Link 
                      href="https://linkedin.com/in/rishabhgaud7800" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link social-link--linkedin"
                      aria-label="LinkedIn Profile"
                    >
                      <i className="ri-linkedin-box-fill"></i>
                    </Link>
                    <Link 
                      href="https://github.com/Rishabh-Gaud" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link social-link--github"
                      aria-label="GitHub Profile"
                    >
                      <i className="ri-github-fill"></i>
                    </Link>
                    <Link 
                      href="https://twitter.com/GaudRishabh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link social-link--twitter"
                      aria-label="Twitter Profile"
                    >
                      <i className="ri-twitter-fill"></i>
                    </Link>
                    <Link 
                      href="https://instagram.com/riishabhgaud" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link social-link--instagram"
                      aria-label="Instagram Profile"
                    >
                      <i className="ri-instagram-fill"></i>
                    </Link>
                    <Link 
                      href="https://medium.com/@gaudrishabh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link social-link--medium"
                      aria-label="Medium Profile"
                    >
                      <i className="ri-medium-fill"></i>
                    </Link>
                    <Link 
                      href="https://www.leetcode.com/rishabh_gaud/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link social-link--leetcode"
                      aria-label="LeetCode Profile"
                    >
                      <span className="social-link__text">LC</span>
                    </Link>
                    <Link 
                      href="https://www.geeksforgeeks.org/user/rishabhgaud/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link social-link--geeksforgeeks"
                      aria-label="GeeksforGeeks Profile"
                    >
                      <span className="social-link__text">GfG</span>
                    </Link>
                    <Link 
                      href="https://www.codechef.com/users/rishabh_gaud" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link social-link--codechef"
                      aria-label="CodeChef Profile"
                    >
                      <span className="social-link__text">CC</span>
                    </Link>
                    <Link 
                      href="https://www.hackerrank.com/rishabh78150891" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link social-link--hackerrank"
                      aria-label="HackerRank Profile"
                    >
                      <span className="social-link__text">HR</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image 
                alt="Rishabh Kumar Gaud - Full-Stack Developer" 
                src={heroImg} 
                width="400" 
                height="400" 
                priority
                placeholder="blur"
                quality={90}
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 400px"
              />

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
                  <h5 className="mb-0">2+ Years</h5>
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
