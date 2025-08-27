import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Rishabh Kumar Gaud</title>
        <meta name="description" content="The page you're looking for doesn't exist. Visit my portfolio homepage to explore my work." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <h1 className="display-1" style={{ color: '#01d293', fontWeight: 'bold' }}>404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="mb-4" style={{ fontSize: '1.2rem' }}>
                Oops! The page you&apos;re looking for doesn&apos;t exist. 
                It might have been moved, deleted, or you entered the wrong URL.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link href="/" className="primary__btn">
                  Go to Homepage
                </Link>
                <Link href="#portfolio" className="secondary__btn">
                  View Portfolio
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}