import { useState, useEffect } from "react";
import { Author, Post } from "../types";

const usePostsAndAuthors = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch("/posts.json");
        const postsData: Post[] = await postsResponse.json();

        const authorsResponse = await fetch("/authors.json");
        const authorsData: Author[] = await authorsResponse.json();

        setPosts(postsData);
        setAuthors(authorsData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, authors, loading, error };
};

export default usePostsAndAuthors;
