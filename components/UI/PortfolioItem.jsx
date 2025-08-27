import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword, isCompanyProject } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className={`${classes.portfolio__img}`}>
        <Image 
          alt={title} 
          src={img} 
          width="380" 
          height="250" 
          style={{ objectFit: 'cover', width: '100%', height: '200px' }}
        />
      </div>

      <div className={`${classes.portfolio__content}`}>
        <h6 className={`${classes.portfolio__title}`}>{title}</h6>
        <div className={`${classes.portfolio__keywords}`}>
          {keyword.map((item, index) => (
            <span className={`${classes.portfolio__keyword}`} key={index}>
              {item}
            </span>
          ))}
        </div>

        {!isCompanyProject && liveUrl && (
          <div className={`${classes.portfolio__live}`}>
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <i className="ri-external-link-line"></i> View Project
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
