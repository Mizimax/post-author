import React from "react";
import usePostsAndAuthors from "../hooks/usePostsAndAuthors.ts";
import PostList from "../components/PostList.tsx";
import styled from "styled-components";

const PostsPage: React.FC = () => {
  const { posts, authors, loading, error } = usePostsAndAuthors();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <h1>MAQE Forum</h1>
      <p>Your current timezone is: {timezone}</p>
      <PostList posts={posts} authors={authors} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default PostsPage;
