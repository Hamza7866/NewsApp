import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const TopHeadLine = ({ newsData }) => {
  return (
    <div>
      <h1>Top Headline</h1>
      {newsData.map((news, index) => {
        return (
          <div key={index} className="main-container">
            <div className="container">
              <Jumbotron className="mt-3">
                <img
                  src={news.urlToImage}
                  alt="pic"
                  // style={{ width: "20rem" }}
                  className="main-img"
                />
                <h3 className="title">{news.title}</h3>
                <p>{news.content}</p>
                <p>
                  <Button href={news.url} target="_blank" variant="primary">
                    Read More
                  </Button>
                </p>
              </Jumbotron>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopHeadLine;
