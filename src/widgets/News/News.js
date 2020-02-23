import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [data, setData] = useState({ articles: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://newsapi.org/v2/everything?q=bitcoin&from=2020-01-23&sortBy=publishedAt&apiKey=080166ce3b2842bba7e9d29cc29840c4'
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="newsCards">
      <h2>Recent News</h2>
      <ul>
        {data.articles.map((news, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
            <h5>{news.publishedAt}</h5>
            <div className="container">
              <img
                src={news.urlToImage}
                alt="imgNews"
                width="100"
                height="100"
              />
              <a href={news.url}>
                <h3>{news.title}</h3>
              </a>
              <p>{news.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default News;
