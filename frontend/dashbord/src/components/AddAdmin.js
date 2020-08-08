import React, { useState } from "react";
import { addadmin } from "./AdminMethods";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";

export default function AddAdmin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newAdmin = {
      username: username,
      password: password,
    };

    addadmin(newAdmin).then((res) => {
      props.history.push("/AddminLogin");
    });
  }

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <div className="logForm" style={{ marginLeft: "210px" }}>
          <form onSubmit={handleSubmit}>
            <div>
              <InputLabel id="usLog"> Admin Username </InputLabel>
              <br></br>
              <Input
                type="text"
                id="usernLog"
                placeholder="Enter your user name"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br></br>
            <div>
              <InputLabel id="pLog"> Admin Password </InputLabel>
              <br></br>
              <Input
                type="password"
                id="passwordLog"
                placeholder="Enter your password"
                autoComplete="off"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <div>
              <Button color="primary" disabled={!validateForm()} type="submit">
                {" "}
                Add admin{" "}
              </Button>
            </div>
          </form>
        </div>
      </Grid>
    </>
  );
}
