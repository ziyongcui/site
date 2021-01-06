import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import linkedin from '../assets/images/linkedinlogo.png';
import github from '../assets/images/github.png';
import goodreads from '../assets/images/goodreads.png';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Ziyong Cui
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        <a href="https://www.linkedin.com/in/ziyong-cui-3b799229/">
                            <img src={linkedin} width='30' height='30' />
                        </a>
                        <a href="https://github.com/ziyongcui/">
                            <img src={github} width='30' height='30' />
                        </a>
                        <a href="https://www.goodreads.com/">
                            <img src={goodreads} width='30' height='30' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;