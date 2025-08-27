import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/work.module.css";
import work from "../data/work.json";

function TabPanel({ index }) {
  return (
    <div className={`${classes.work__content}`}>
      <div className={`${classes.work__header}`}>
        <h4 className={`${classes.work__role}`}>{work.companies[index].role}</h4>
        <div className={`${classes.work__company}`}>
          <i className="ri-building-line"></i>
          <span>{work.companies[index].name}</span>
        </div>
        <div className={`${classes.work__meta}`}>
          <span className={`${classes.work__duration}`}>
            {work.companies[index].startDate} - {work.companies[index].endDate}
          </span>
          <span className={`${classes.work__location}`}>
            <i className="ri-map-pin-line"></i>
            {work.companies[index].location}
          </span>
        </div>
      </div>
      
      <div className={`${classes.work__description}`}>
        {work.companies[index].description.map((item, idx) => (
          <div key={idx} className={`${classes.work__item}`}>
            <i className="ri-arrow-right-s-line"></i>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  // Default to the latest (first) company - CollegeIt is first in the data
  const [selectedCompany, setSelectedCompany] = useState(0);

  return (
    <section id="work" className={`${classes.work__section}`}>
      <Container>
        <div className="text-center mb-5">
          <SectionSubtitle subtitle="Work Experience" />
          <h2 className="mt-4 mb-4">Professional Journey</h2>
          <p>Building innovative solutions and driving measurable impact</p>
        </div>
        
        <Row>
          <Col lg="4" md="12" className="mb-4">
            <div className={`${classes.work__tabs}`}>
              {work.companies.map((company, index) => (
                <div
                  key={index}
                  className={`${classes.work__tab} ${
                    index === selectedCompany ? classes.work__tab__active : ''
                  }`}
                  onClick={() => setSelectedCompany(index)}
                >
                  <div className={`${classes.work__tab__indicator}`}></div>
                  <div className={`${classes.work__tab__content}`}>
                    <h5>{company.name}</h5>
                    <small>{company.startDate} - {company.endDate}</small>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          
          <Col lg="8" md="12">
            <TabPanel index={selectedCompany} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
