import React from "react";
import { Grid,Typography } from "@mui/material";
import { GirlsItem } from "./GirlsItem";

export const GirlsList=({data})=>{
    return(
        <div className="main">
            <Grid container spacing={2}>
             <Grid item xs={12}>
              <Typography variant="h3" color="pink" align="center">
                   Name of Girls
              </Typography>
             </Grid>
             {
                data.map((item)=>
                <GirlsItem  item={item}/>
                )
             }
            </Grid>

        </div>
    )
}