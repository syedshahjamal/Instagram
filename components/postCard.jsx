import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function postCard({ post, isSingle }) {
  const users = [
    "Hassan",
    "Ali",
    "Farhan",
    "Salman",
    "Ali",
    "Saeed",
    "Farukhh",
    "Anwar",
    "Hamza",
    "Iftakhar",
  ];

  return (
    <Card style={{ maxWidth: "30rem" }}>
      <Card.Header>{users[post.userId]}</Card.Header>
      <Card.Img variant="top" src="https://picsum.photos/600/300" />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        {!isSingle && (
          <Button href={`/home/${post.id}`} variant="primary">
            Details
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
