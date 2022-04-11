import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./landingPage.css";


// landing page layout including title and buttons.
const landingPage = () => {
  return (
    < div className="main" >
      <Container>
        <Row>
          <div className="landing">
            <div>
              <h1 className="intro-text">Welcome to Stuff and Things Clothing Charity</h1>
            </div>
          </div>
        </Row>
      </Container>
    </div >
  );
};


export default landingPage;