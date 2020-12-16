import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import TopHeadLine from "./TopHeadLine";
const News = () => {
  const [newsData, setNewsData] = useState([]);
  console.log(newsData);
  const newsApi = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=9d33da08e78a4541a26669e980396fc0`
    );
    // console.log(res.data.articles);
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
