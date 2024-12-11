import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const CardComponent = ({ info, children }) => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <Card sx={{ maxWidth: 345, padding: 2 }}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: { xs: 250, md: 350 },
            objectFit: "contain",
          }}
          src={info.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {info.caption}
          </Typography>
        </CardContent>
        {children}
      </Card>
    </Grid>
  );
};

export default CardComponent;
