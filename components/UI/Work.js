import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";

// const Work = () => {
//   return (
//     <section id="services">
//       <Container>
//         <SectionSubtitle subtitle="💼 WORK EXPERIENCE" />
//         <Row>
//           <Col className={`${classes.service__title}`}>
//             <h3 className="mb-2 mt-4">Medibuddy</h3>
//             <h4 className="mb-4">SDE Intern </h4>
//               <ul>
//                 <li>
//                   Built Healthcity from scratch providing a platform for vendors
//                   to onboard and sell products to users with a user-friendly
//                   vendor onboarding process.
//                 </li>
//                 <li>
//                   Utilised Postgres for data storage and Redis for caching,
//                   while utilizing Google Analytics and CleaverTap to track user
//                   behavior and improve the overall user experience of the
//                   Healthcity.
//                 </li>
//                 <li>
//                   Utilized Retool to develop a vendor onboarding tool that was
//                   both user-friendly and efficient.
//                 </li>
//                 <li>
//                   Created Dynamic Banner Service to provide a continuous
//                   integration service in order to automate the entire process of
//                   changing the banner
//                 </li>
//               </ul>
//           </Col>
//         </Row>
//         <Row>
//           <Col className={`${classes.service__title}`}>
//             <h3 className="mb-2 mt-4">
//               Semicolon - coding club of NIT Srinagar
//             </h3>
//             <h4 className="mb-4">Tech Lead </h4>
//               <ul>
//                 <li>
//                   Organized and executed multiple technical coding events like
//                   CodeVita, Technophilia, Feb-Fest, etc. where I took on the
//                   responsibility of curating the problem statements for
//                   participants.
//                 </li>
//                 <li>
//                   Led chapter of 20+ members to work towards goals that improve
//                   and promote coding culture in college.
//                 </li>
//                 <li>
//                   Analyzing existing activities and scheduling meetings to
//                   discuss improvements.
//                 </li>
//               </ul>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Work;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import work from "../data/work.json";

function TabPanel(props) {
  const { index } = props;

  return (
    <div
      className="w-full place-self-center  border-1  rounded-lg p-1 space-y-5 "
      style={{ backgroundColor: "#808dad" }}
    >
      <div
        className="text-lg dark:text-darkText p-2 pt-1 "
        style={{ color: "white" }}
      >
        <h5>{work.companies[index].role}</h5>
      </div>
      <div
        className="text-sm dark:text-darkText flex flex-row p-2 pt-0"
        style={{ color: "white" }}
      >
        <h4>
          <FontAwesomeIcon
            icon={faBuilding}
            className="text-[#545659] w-5 h-5"
          />{" "}
          {"  "}
          {work.companies[index].name}
        </h4>
      </div>
      <div className="flex flex-row justify-between items-center space-x-5 px-2 pt-0">
        <div className="text-sm text-white dark:text-darkText">
          {work.companies[index].startDate} - {work.companies[index].endDate}
        </div>
        <div className="text-sm" style={{ color: "#99cd8d" }}>
          {work.companies[index].location}
        </div>
      </div>
      <div className="space-y-3 p-3">
        {work.companies[index].description.map((item, index) => (
          <div
            key={index}
            className="flex flex-row space-x-2 items-start"
            style={{ color: "#c7ced8" }}
          >
            <div className="text-lightText dark:text-darkText pt-1">
              {" "}
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                className=" w-4 h-4"
              />{" "}
              {""}
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const [value, setValue] = useState(0);

  return (
    <section id="services">
      <Container>
        <div className="flex flex-col justify-center items-center mt-32 space-y-20">
          <SectionSubtitle subtitle="Work Experience" />
          <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-10 lg:flex-row" style={{display:"flex"}} >
            <div className="flex flex-row space-x-5 lg:space-x-0 lg:space-y-3 lg:flex-col">
              {work.companies.map((company, index) => (
                <div
                  key={index}
                  className="flex flex-row space-x-2 items-center"
                >
                  <div
                    className={`w-2 rounded-full ${
                      index === value
                        ? "h-4  bg-white"
                        : "h-2 bg-red-400 dark:bg-darkText"
                    }`}
                  ></div>
                  <div
                    className={`px-3 py-1 rounded-lg cursor-pointer ${
                      index === value
                        ? "bg-red-500 text-yellow"
                        : " text-orange-400"
                    }`}
                    style={{color: `${index == value ? "yellow": "white"}`}}
                    onClick={() => setValue(index)}
                  >
                    {company.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-[600px]">
              <TabPanel index={value} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
