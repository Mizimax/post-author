import React, { useMemo } from "react";
import styled from "styled-components";
import { Author, Post as PostData } from "../types";

interface PostProps {
  post: PostData;
  author?: Author;
}

const Post: React.FC<PostProps> = ({ post, author }) => {
  const postedAt = useMemo(() => {
    const date = new Date(post.created_at);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }, [post.created_at]);

  return (
    <PostContainer>
      {author && (
        <AuthorInfo>
          <AuthorAvatar src={author.avatar_url} alt={author.name} />
          <FlexContainer style={{ gap: 8 }}>
            <AuthorName>{author.name}</AuthorName>
            <PostedOn>posted on {postedAt}</PostedOn>
          </FlexContainer>
        </AuthorInfo>
      )}
      <FlexContainer style={{ gap: 16, padding: "0 20px" }}>
        <PostImage src={post.image_url} alt={post.title} />
        <PostContent>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body}</PostBody>
        </PostContent>
      </FlexContainer>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;

  &:nth-child(even) {
    background-color: #ccecff;
  }
`;

const PostTitle = styled.h2`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 10px;
`;

const PostImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const PostBody = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const PostContent = styled.div`
  flex: 1;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const AuthorAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.span`
  font-weight: bold;
  color: #f74e2b;
  font-size: 14px;
`;

const PostedOn = styled.span`
  color: #8b98a4;
  font-size: 14px;
`;
