import React, { useEffect, useState } from "react";
import Search from "./Search";
import Text from "./Text";

export default function List() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchAge, setSearchAge] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api?results=50")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  return (
    <div>
      <p>Name</p>
      <Search setSearch={setSearchName} search={searchName} />
      <p>Age</p>
      <Search setSearch={setSearchAge} search={searchAge} />
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
            <div key={person.registered.date}>
              <Text color="primary" size="s">
                {person.name.title} {person.name.first} {person.name.last}
              </Text>
              <Text>Age: {person.dob.age}</Text>
              <img src={person.picture.medium} alt='profile-pic'/>
            </div>
          );
        })}
    </div>
  );
}
