import React from "react";
import Link from "next/link";
import classes from "../../styles/blog-item.module.css";

const BlogItem = ({ post }) => {
  const { title, excerpt, date, category, tags, url, readTime } = post;

  return (
    <div className={`${classes.blog__item}`}>
      <div className={`${classes.blog__content}`}>
        <div className={`${classes.blog__meta} mb-2`}>
          <span className={`${classes.blog__category}`}>{category}</span>
          <span className={`${classes.blog__date}`}>{date}</span>
          <span className={`${classes.blog__read_time}`}>{readTime}</span>
        </div>
        
        <h4 className={`${classes.blog__title} mb-3`}>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        </h4>
        
        <p className={`${classes.blog__excerpt} mb-3`}>
          {excerpt}
        </p>
        
        <div className={`${classes.blog__tags} mb-3`}>
          {tags.map((tag, index) => (
            <span key={index} className={`${classes.blog__tag}`}>
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${classes.blog__read_more}`}
        >
          Read Article
          <i className="ri-external-link-line ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;