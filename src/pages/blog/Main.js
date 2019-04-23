import React from "react";
import {Button, Card, Col, Row} from 'react-bootstrap';
import {ControlledCarousel} from "../../components/ControlledCarousel";

export class Main extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.
  }


  render() {
    return (
      <>
      <ControlledCarousel/>

      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://placeimg.com/286/180/any" />
            <Card.Body>
              <Card.Title>News Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">#News</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="https://placeimg.com/286/180/any" />
            <Card.Body>
              <Card.Title>News Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">#News</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="https://placeimg.com/286/180/any" />
            <Card.Body>
              <Card.Title>News Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">#News</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

  </>
  );
  }
}
