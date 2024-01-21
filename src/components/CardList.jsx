import React from "react";
import { Grid,Typography } from "@mui/material";
import { CardItem } from "./CardItem";

export const CardList=({data})=>{
    return(
        <div className="main">
       <Grid container spacing={2}>
         <Grid item xs={12}>
           <Typography variant="h2" color="green" align="center">
              Employee List
           </Typography>
         </Grid>
         {
            data.map((item)=>
            <CardItem item={item} />
            )
         }
       </Grid>
       </div>
    )
}