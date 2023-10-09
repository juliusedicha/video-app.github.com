import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer", // Corrected typo "ponter" to "pointer"
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "10px", height: "130px", width:"130px" }} // Corrected the style object format
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
