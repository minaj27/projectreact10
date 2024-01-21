import React from "react";
import { Grid,Typography } from "@mui/material";
import { WordItem } from "./WordItem";


export const WordList=({data})=>{
    return(
        <div className="main">
       <Grid container spacing={2}>
        <Grid item xs={12}>
       <Typography variant="h3" color="blue" align="center">
            Words List
       </Typography>
        </Grid>
      {
        data.map((item)=>
        <WordItem item={item}/>
        )
      }
       </Grid>
       </div>
    )
}