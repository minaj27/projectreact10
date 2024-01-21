import React from "react";
import { Grid,Typography } from "@mui/material";
import { StateItem } from "./StateItem";


export const StateList=({data})=>{
    return(
       <div className="main">
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h3" color="cadetblue" align="center" >
                    Name of States
                </Typography>
              </Grid>
              {
                data.map((item)=>
                <StateItem item={item} />
                )
              }
          </Grid>
       </div>
    )
}