import React, { useEffect, useState } from "react";
import Search from "./Search";

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

  console.log(data);

  return (
    <div>
      <p>Name</p>
      <Search setSearch={setSearchName} />
      <p>Age</p>
      <Search setSearch={setSearchAge} />
      {data
        .filter(
          (personName) =>
            Object.values(personName.name)
              .join(" ")
              .toLowerCase()
              .includes(searchName)
          //person.name.title.toLowerCase().includes(searchName)
        )
        //.filter((personAge) => personAge.dob.age == parseInt(searchAge))
        .map((el) => {
          return (
            <div key={el.registered.date}>
              <p>
                {el.name.title} {el.name.first} {el.name.last}
              </p>
              <p>Age: {el.dob.age}</p>
            </div>
          );
        })}
    </div>
  );
}
