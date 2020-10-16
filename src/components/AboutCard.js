import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const AboutCard = (props) => {
  return (
    <div>
      <Card className='border border-danger m-5 bg-dark'>
        <CardBody className='row m-0 p-0 '>
          <CardImg top className='col-6 m-0 p-0' src="/img/about.jpg" alt="Card image cap" />
          <div className='col-6 m-0 p-5'>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutCard;