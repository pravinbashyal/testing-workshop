import React, { useState } from "react";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const clearData = () => {
    setName("");
    setAge(0);
    setLocation("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await props.onSubmit({ name, age, location });
    clearData();
  };
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </p>
      <p>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={age}
          min={0}
          onChange={(e) => setAge(Number(e.target.value))}
        ></input>
      </p>
      <p>
        <label>
          Please choose one or more Location:
          <select
            name="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          >
            <option value="">None</option>
            <option value="berlin">Berlin</option>
            <option value="munich">Munich</option>
            <option value="kathmandu">Kathmandu</option>
            <option value="delhi">Delhi</option>
            <option value="tehran">Tehran</option>
            <option value="sauPaulo">Sao Paulo</option>
            <option value="hogwards">Hogwards</option>
          </select>
        </label>
      </p>
      <button type="submit">Add Item</button>
    </form>
  );
};
