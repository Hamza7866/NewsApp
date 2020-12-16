import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const TopHeadLine = ({ newsData }) => {
  return (
    <div>
      <h1>Top Headline</h1>
      {newsData.map((news) => {
        return (
          <>
            <div className="container">
              <Jumbotron className="mt-3">
                <img
                  src={news.urlToImage}
                  alt="pic"
                  style={{ width: "20rem" }}
                />
                <h3>{news.title}</h3>
                <p>{news.content}</p>
                <p>
                  <Button href={news.url} variant="primary">
                    Read More
                  </Button>
                </p>
              </Jumbotron>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default TopHeadLine;
