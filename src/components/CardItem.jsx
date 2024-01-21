import React from "react";
import { Grid,Card,CardContent,Typography } from "@mui/material";

export const CardItem=({item})=>{
    return(
        <Grid item xs={3}>
           <Card>
            <CardContent>
                <Typography variant="h5" color="red">{item.name}</Typography>
                <Typography variant="h5" color="red">{item.city}</Typography>
            </CardContent>
           </Card>
        </Grid>
    )
}