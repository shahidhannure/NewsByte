import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from 'newspaper';

const NewsDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Fetch article details based on the ID (you might need to save the full article content).
        const articleData = // Fetch the article data using the ID.
        setArticle(articleData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="news-detail">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default NewsDetail;
