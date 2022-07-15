import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import millify from "millify";
import moment from "moment";
import "./github.css";
import styled from "styled-components";

const H2 = styled.h2`
  text-transform: uppercase;
`;
const Card = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 4em;
  margin-top: 3em;

  div p {
    text-align: left;
  }

  p {
    font-size: 0.8em;
    opacity: 0.7;
  }

  img {
    height: 200px;
    width: 200px;
    margin-right: 3em;
  }

  .statistics {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.3em;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 0;
    }

    div p {
      text-align: center;
    }
  }
`;

const Content = styled.div`
  width: 80%;
  .div {
    display: flex;
  }

  h2 {
    margin: 1em 0 0.5em 0;
    color: white;
  }

  @media (max-width: 520px) {
    width: 100%;
    h2 {
      text-align: center;
    }
  }
`;

const Github = () => {
  const [repo, setRepo] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = (setItems, items) => {
    fetch(
      `https://api.github.com/search/repositories?q=created:>2022-06-14&sort=stars&order=desc&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setItems([...items, ...data.items]));
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData(setRepo, repo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(repo);

  const allRepo = repo.map((data, i) => (
    <Card key={i}>
      <img alt="repo" src={data.owner.avatar_url} />
      <Content>
        <H2>{data.name}</H2>
        <p>{data.description}</p>
        <div className="statistics">
          <div>
            <p className="box">
              <a
                href={data.html_url}
                alt="stars"
                target="_blank"
                rel="noreferrer"
              >
                {millify(data.stargazers_count, {
                  precision: 2,
                })}{" "}
                Stars
              </a>
            </p>
            <p className="box">
              <a
                href={data.html_url}
                alt="repo"
                target="_blank"
                rel="noreferrer"
              >
                {data.open_issues} Issues
              </a>
            </p>
          </div>
          <p>{moment(data.created_at).startOf("ss").fromNow()}</p>
        </div>
      </Content>
    </Card>
  ));

  return (
    <main className="github-main">
      <h1>Most Starred Repos from the last 30 days</h1>
      <InfiniteScroll
        dataLength={repo.length}
        next={() => {
          fetchData(setRepo, repo);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {allRepo}
      </InfiniteScroll>
    </main>
  );
};

export default Github;
