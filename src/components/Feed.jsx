import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

//sx: style, inside sx: means usually,
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  /**useEFfect is a lifecycle mgmt hook, which will decide when the components will be initially loaded. empty dependency array means it will be only run when we reload the page  */
  const [videos, setVideos] = useState([]);
  useEffect(() => {
   // setVideos(null)
    /** fetchFromAPI is async function we cannot simply say const data = fetchFrom~ because it returns promise, for Async function we have to chain .then to it.*/
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      /** .then function will be executed once we actually call this function.
       * once it returns as promise. So to be able to get data, first parameter of .then  */
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);
  /** how do you change the category? by passing the necessary states into SideBar components */

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2022 Marie Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "white" }}>
          {selectedCategory}
          <span style={{ color: "#F31503", marginLeft: "10px" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
