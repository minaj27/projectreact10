import React from "react";
import { Grid,Typography } from "@mui/material";
import { BranchItem } from "./BranchItem";

export const BranchList=({data})=>{
    return(
        <div className="main">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" color="yellow" align="center">
              Branches of Engineering
          </Typography>
        </Grid>
        {
            data.map((item)=>
            <BranchItem item={item} />
            )
        }
      </Grid>
        </div>

    )
}