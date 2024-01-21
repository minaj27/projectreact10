import React from "react";
import { Grid ,Button} from "@mui/material";

export const StateItem=({item})=>{
    return(
        <Grid item xs={4}>
         <Button variant="contained" fullWidth color="warning">{item}</Button>
        </Grid>
    )
}