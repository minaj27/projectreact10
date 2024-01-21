import React from "react";
import { Grid,Button } from "@mui/material";

export const DoctorItem=({item})=>{
    return(
      <Grid item xs={4}>
       <Button variant="contained" fullWidth color="success">{`Dr. ${item} `}</Button>
      </Grid>
    )
}