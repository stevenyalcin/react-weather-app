import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';

const News = () => {
  const [data, setData] = useState({ articles: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-23&sortBy=publishedAt&apiKey=080166ce3b2842bba7e9d29cc29840c4'
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
            <div className="container">
              <h5>⏰ {news.publishedAt}</h5>
              <img
                className="container__image"
                src={news.urlToImage}
                alt="imgNews"
                width="200"
                height="150"
              />

              <div class="container__text">
                <a href={news.url}>
                  <h3>{news.title} 👈🏻</h3>
                </a>
                <p>{news.description} ✍🏻</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default News;