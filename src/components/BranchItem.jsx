import React from "react";
import { Grid,Button } from "@mui/material";

export const BranchItem=({item})=>{
    return(
      <Grid item xs={4}>
       <Button variant="contained" fullWidth color="warning">{`${item} Engineering`}</Button>
      </Grid>
    )
}