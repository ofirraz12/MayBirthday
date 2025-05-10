import React from 'react';
import Card from 'react-bootstrap/Card';

export default function BirthdayCard() {
  return (
    <div className="container mb-5">
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="h4">A Little Note for You</Card.Title>
          <Card.Text style={{ fontSize: '1.1rem' }}>
            May your day be filled with laughter, love, and all the cake you can
            handle. Here’s to another year of amazing memories together! 💖
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
