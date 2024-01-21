import React from "react";
import { Grid,Typography } from "@mui/material";
import { DoctorItem } from "./DoctorItem";

export const DoctorList=({data})=>{
    return(
        <div className="main">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" color="darkblue" align="center">
              Consult your Doctor
          </Typography>
        </Grid>
        {
            data.map((item)=>
            <DoctorItem item={item} />
            )
        }
      </Grid>
        </div>

    )
}