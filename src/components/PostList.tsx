import React from "react";
import Post from "./Post.tsx";
import { Author, Post as PostData } from "../types";

interface PostListProps {
  posts: PostData[];
  authors: Author[];
}

const PostList: React.FC<PostListProps> = ({ posts, authors }) => {
  const getAuthor = (author_id: number) => {
    return authors.find((author) => author.id === author_id);
  };

  return (
    <div>
      {posts.map((post) => {
        const author = getAuthor(post.author_id);
        return <Post key={post.id} post={post} author={author} />;
      })}
    </div>
  );
};

export default PostList;
