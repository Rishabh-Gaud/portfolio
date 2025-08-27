import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState(portfolioData);

  useEffect(() => {
    if (filter === "All") {
      setData(portfolioData);
    } else {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );
      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio" className={`${classes.portfolio__section}`}>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <SectionSubtitle subtitle="My Portfolio" />
            <h2 className="mt-4 mb-4">Featured Projects</h2>
            <p>Showcasing my latest work in AI, full-stack development, and innovative solutions</p>
          </Col>
        </Row>
        
        <Row>
          <Col lg="12" className="mb-4">
            <div className={`${classes.tab__btns} text-center`}>
              <button
                className={`${filter === "All" ? active : ""} ${classes.tab__btn}`}
                onClick={() => setFilter("All")}
              >
                All Projects
              </button>
              <button
                className={`${filter === "Web Application" ? active : ""} ${classes.tab__btn}`}
                onClick={() => setFilter("Web Application")}
              >
                Web Apps
              </button>
              <button
                className={`${filter === "AI Application" ? active : ""} ${classes.tab__btn}`}
                onClick={() => setFilter("AI Application")}
              >
                AI Projects
              </button>
              <button
                className={`${filter === "PWA" ? active : ""} ${classes.tab__btn}`}
                onClick={() => setFilter("PWA")}
              >
                Mobile Apps
              </button>
            </div>
          </Col>
        </Row>

        <Row>
          {data?.length > 0 ? (
            data.map((item) => (
              <Col lg="4" md="6" sm="12" key={item.id} className="mb-4">
                <PortfolioItem item={item} />
              </Col>
            ))
          ) : (
            <Col lg="12" className="text-center">
              <p>No projects found for this category.</p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
