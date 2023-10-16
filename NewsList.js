import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://news.google.com/rss');
        // Parse the XML response and set the articles in the 'news' state.
        const articles = parseXMLResponse(response.data);
        setNews(articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="news-list">
      {news.map((article) => (
        <Link to={`/article/${article.id}`} key={article.id}>
          <div className="news-card">
            <h2>{article.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsList;

// Parse XML response function (replace with your own implementation).
function parseXMLResponse(xmlData) {
  // Implement your XML parsing logic here.
}
