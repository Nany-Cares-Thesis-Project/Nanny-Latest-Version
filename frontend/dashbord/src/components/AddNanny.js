import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Input from '@material-ui/core/Input';

import { addnanny } from "./AdminMethods";

export default function AddNanny(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [kidsNum, setKidsNumber] = useState("");
  const [cost, setCost] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [experianceLevel, setExperianceLevel] = useState("");
  const [age, setAge] = useState("");
  const [workingHour, setWorkingHour] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNanny = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      place: place,
      kidsNum: kidsNum,
      cost: cost,
      educationLevel: educationLevel,
      experianceLevel: experianceLevel,
      age: age,
      workingHour: workingHour,
    };
    addnanny(newNanny).then((res) => {
      console.log("it works");
    });
    props.history.push("/Admin");
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <form justify='center' onSubmit={handleSubmit}>
        <label>Name :</label>
        <br />
        <Input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Phone Number :</label>
        <br />
        <Input
          type="tel"
          value={phoneNumber}
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <label>Email :</label>
        <br />
        <Input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Place :</label>
        <br />
        <Input
          type="text"
          value={place}
          required
          onChange={(e) => setPlace(e.target.value)}
        />
        <br />
        <label>Kids Number :</label>
        <br />
        <Input
          type="number"
          value={kidsNum}
          required
          onChange={(e) => setKidsNumber(e.target.value)}
        />
        <br />
        <label>Cost :</label>
        <br />
        <Input
          type="number"
          value={cost}
          required
          onChange={(e) => setCost(e.target.value)}
        />
        <br />
        <label>Education Level :</label>
        <br />
        <Input
          type="text"
          value={educationLevel}
          required
          onChange={(e) => setEducationLevel(e.target.value)}
        />
        <br />
        <label>ExperianceLevel :</label>
        <br />
        <Input
          type="text"
          value={experianceLevel}
          required
          onChange={(e) => setExperianceLevel(e.target.value)}
        />
        <br />
        <label>Age :</label>
        <br />
        <Input
          type="number"
          value={age}
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label>WorkingHour :</label>
        <br />
          <Input type="number"
          value={workingHour}
          required
          onChange={(e) => setWorkingHour(e.target.value)}
        />
        <br /><br />
        <input textAlign='center' type="submit" />
      </form>
    </Grid>
  );
}
