import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import TopHeadLine from "./TopHeadLine";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  const newsApi = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    );

    setNewsData(res.data.articles);
  };

  useEffect(() => {
    newsApi();
  }, []);
  return (
    <div>
      <TopHeadLine newsData={newsData} />
    </div>
  );
};

export default News;
