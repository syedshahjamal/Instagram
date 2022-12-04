import React from "react";
import Navbar from "../../components/navbar";

import PostCard from "../../components/postCard";
import { Container } from "react-bootstrap";

function Index({ post }) {
  return (
    <>
      <Navbar />
      <Container>
        <div className="d-flex align-items-center flex-column mt-4">
          <PostCard post={post} isSingle={true} />
        </div>
      </Container>
    </>
  );
}

export default Index;

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?id=${id}`
  );
  const post = await res.json();
  return {
    props: { post: post[0] },
  };
}
