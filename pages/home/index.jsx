import React, { useEffect} from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import PostCard from "../../components/postCard";
import { Container } from "react-bootstrap";
import Navbar from "../../components/navbar";
function Index({ posts }) {
  const currentSession = useSession();
  useEffect(() => {
    if (currentSession.status === "unauthenticated") {
      Router.replace("/Auth/login");
    }
  }, [currentSession]);
  return (
    <>
      <Navbar />
      <Container>
        <div className="d-flex align-items-center flex-column ">
          {posts.map((post) => (
            <div className="my-2">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Index;

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await res.json();
  return {
    props: { posts },
  };
}
