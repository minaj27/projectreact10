import React from "react"
import { Grid,Button } from "@mui/material"

export const GirlsItem=({item})=>{
    return(
      <Grid item xs={2}>
         <Button variant="contained" fullWidth color="info">{item}</Button>
      </Grid>
    )
}