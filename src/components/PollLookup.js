import {Grid, TextField} from "@material-ui/core";
import React from "react";

function PollLookup(props) {

  return (
    <>
      <p>0x5FbDB2315678afecb367f032d93F642f64180aa3</p>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="poll-address"
            name="poll-address"
            label="Set Poll Address"
            value={props.pollAddress}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  )
}

export default PollLookup;
