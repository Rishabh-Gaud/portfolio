import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import BlogItem from "./BlogItem";
import classes from "../../styles/blog.module.css";

const blogPosts = [
  {
    id: "01",
    title: "Resize Image and then upload to AWS S3 with Node.js",
    excerpt: "Learn how to efficiently resize images and upload them to AWS S3 using Node.js, Multer, and Sharp library for optimal performance.",
    date: "2024",
    category: "Backend",
    tags: ["Node.js", "AWS S3", "TypeScript", "Image Processing"],
    url: "https://medium.com/@gaudrishabh/resize-image-and-then-upload-to-aws-s3-with-node-js-b0be9d989a34",
    readTime: "5 min read"
  },
  {
    id: "02", 
    title: "Encrypt response and show decrypt data in Node.js",
    excerpt: "Implement secure data encryption and decryption in Node.js applications using AES encryption for enhanced security.",
    date: "2024",
    category: "Security",
    tags: ["Node.js", "AES", "Security", "Crypto"],
    url: "https://medium.com/@gaudrishabh/encrypt-response-and-show-decrypt-data-in-node-js-f27a95b64673",
    readTime: "4 min read"
  },
  {
    id: "03",
    title: "Enhancing Your Next.js App with an AI ChatBot",
    excerpt: "Integrate OpenAI's GPT models into your Next.js application to create intelligent chatbot experiences for your users.",
    date: "2024", 
    category: "AI/ML",
    tags: ["Next.js", "OpenAI", "ChatBot", "AI"],
    url: "https://medium.com/@gaudrishabh/enhancing-your-next-js-app-with-an-ai-chatbot-6bf3efc38ccd",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <section id="blog" className={`${classes.blog}`}>
      <Container>
        <Row>
          <Col lg="12">
            <div className="text-center mb-5">
              <SectionSubtitle subtitle="My Blog" />
              <h2 className="mt-4 mb-4">Latest Articles & Insights</h2>
              <p className="text-center mx-auto" style={{ maxWidth: '600px' }}>
                Sharing my journey and learnings in software development, AI, and modern web technologies.
                Read my latest articles on Medium.
              </p>
            </div>
          </Col>
        </Row>
        
        <Row>
          {blogPosts.map((post) => (
            <Col lg="4" md="6" key={post.id} className="mb-4">
              <BlogItem post={post} />
            </Col>
          ))}
        </Row>
        
        <Row>
          <Col lg="12" className="text-center mt-4">
            <a 
              href="https://medium.com/@gaudrishabh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="primary__btn"
            >
              View All Articles on Medium
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;