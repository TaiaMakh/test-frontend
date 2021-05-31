import React, { useEffect, useState } from "react";
import Search from "./Search";
import Text from "./Text";
import styled from "styled-components";

export default function List() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=50")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <SCList data-test="component-list">
      <div className="gral-div">
        <div className="inputs-div">
          <Text size="m"> Name: </Text>
          <Search setSearch={setSearchName} search={searchName} />
          <Text size="m"> Age: </Text>
          <Search setSearch={setSearchAge} search={searchAge} />
        </div>
        {!loading ? (
          <div className="list-div">
            {data
              .filter((personName) =>
                Object.values(personName.name)
                  .join(" ")
                  .toLowerCase()
                  .includes(searchName.toLowerCase())
              )
              .filter((personAge) =>
                searchAge ? personAge.dob.age === parseInt(searchAge) : true
              )
              .map((person) => {
                return (
                  <div className="div-details" key={person.registered.date}>
                    <div data-test="list-data">
                      <Text size="m">
                        {person.name.title} {person.name.first}{" "}
                        {person.name.last}
                      </Text>
                      <Text size="m">Age: {person.dob.age}</Text>
                      <Text size="m">{person.location.country}</Text>
                      <Text>
                        Contact: {person.email} | {person.phone}
                      </Text>
                    </div>
                    <img src={person.picture.medium} alt="profile-pic" />
                  </div>
                );
              })}
          </div>
        ) : (
          <span className="loading-span">...</span>
        )}
      </div>
    </SCList>
  );
}

const SCList = styled.div`
  .gral-div {
    padding: 35px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inputs-div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
    width: 70%;
  }
  .div-details {
    display: flex;
    justify-content: space-between;
    padding: 25px;
    overflow: auto;
  }
  .div-details img {
    border-radius: 100px;
    height: 100px;
  }
  .list-div {
    height: 100vh;
    overflow: auto;
    width: 70%;
  }
  @keyframes stretch {
    0% {
      transform: scale(0.3);
    }
    100% {
      transform: scale(1.5);
    }
  }
  .loading-span {
    position: fixed;
    top: 30%;
    left: 35%;
    font-size: 10em;
    color: ${({ theme }) => theme.color.secondary};
    animation: stretch 1s ease-out 0s alternate infinite none running;
  }
  @media (max-width: 768px) {
    .gral-div {
      padding: 10px;
      margin-left: unset;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .inputs-div {
      display: flex;
      flex-direction: column;
    }
    .list-div {
      width: 100%;
    }
  }
`;
