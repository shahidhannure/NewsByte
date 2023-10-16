import React, { useState, useEffect } from 'react';
import { Article } from 'newspaper';

const NewsCard = ({ article }) => {
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const fetchSummary = async () => {
      const articleURL = article.link; // Assuming you have 'link' in your article data.
      const summarizedText = await summarizeArticle(articleURL);
      setSummary(summarizedText);
    };

    fetchSummary();
  }, [article.link]);

  return (
    <div className="news-card">
      <h2>{article.title}</h2>
      <p>{summary}</p>
    </div>
  );
};

export default NewsCard;

async function summarizeArticle(articleURL) {
  const article = new Article(articleURL);
  await article.download();
  await article.parse();
  await article.nlp();
  return article.text;
}
