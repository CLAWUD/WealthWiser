import React, { useState } from "react";
// mui
import { Typography, Box, Stack } from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from "./Title";
import Paragraph from "./Paragraph";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState();

  const imageData = [
    {
      alt: "image1",
      url: "https://imgs.search.brave.com/2ssCwQvnOVcbXTn_Z4rCSrjqnGYOpXcQ235FNAtTlc0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzAwLzkzLzc1/LzM2MF9GXzEwMDkz/NzU4OF9YUW1SbUx4/WHJqdmVKckZ0SkYw/ZGVIODZUNHpQV2FZ/dS5qcGc",
    },
    {
      alt: "image2",
      url: "https://imgs.search.brave.com/QWTz8BgmZ9F0bSVWWpkt9kOC0YNF2gal9y80qX6b8FE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/MzEyODI2My9waG90/by9wdXR0aW5nLWEt/Y29pbi1pbi1hLXdo/aXRlLXBpZ2d5LWJh/bmstYXQtaG9tZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LURDSXI2SWR2UUc3/d3l5elAydHFsamZ3/M21IN19YYkd3NTdC/S0toU2R6UT0",
    },
    {
      alt: "image3",
      url: "https://imgs.search.brave.com/AzHfjE3MpyKQB3bWc0d6VyC5AaBKluabYu0NMoLIJ5I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aW52ZXN0b3BlZGlh/LmNvbS90aG1iL0dN/S2FSaGRHbjVkT1Nx/VlMtRi1xX1Z0VEdl/az0vMTUwMHgwL2Zp/bHRlcnM6bm9fdXBz/Y2FsZSgpOm1heF9i/eXRlcygxNTAwMDAp/OnN0cmlwX2ljYygp/L2ludmVzdG1lbnQt/ZWM0YjhhYWI4YzUw/NDMyYTlmZDY3MDdl/ZDFjMjc0OWEuanBn",
    },
    {
      alt: "image4",
      url: "https://imgs.search.brave.com/HrKTQFrxFK2FldMkdrTp0ULZPFqsgxasId3ZtI2FYmg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NzI2NjA1/MDk4MzItMGM3NDlk/YmQ4MmViP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVRkOGZHbHVkbVZ6/ZEh4bGJud3dmSHd3/Zkh4OE1BPT0.jpeg",
    },
    {
      alt: "image5",
      url: "https://imgs.search.brave.com/UfrqFWAPxLI7QaFHz3TKWX8nhkDohzHuuAWy0RGdXE4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgz/ODY1MTM3L3Bob3Rv/L2J1c2luZXNzbWFu/LWlzLXN0YWNraW5n/LWNvaW5zLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1yRFZl/UXpGdkxnTGpYamVm/T25zX3NfTk1vN1Jm/bjcxd1ZhM1EwdUdv/UGlvPQ",
    },
  ];

  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 8,
        px: 2,
        display: { xs: "flex" },
      }}
    >
      <Box
        component="section"
        sx={{
          paddingBottom: 3,
        }}
      >
        <Title text={"A small glimpse of our offerings"} textAlign={"center"} />
        <Typography
          variant="h5"
          component="h4"
          align="center"
          sx={{
            paddingTop: 1,
          }}
        >
          Gallery
        </Typography>
        <Paragraph
          text={
            "We have more 5000 reviews and our\
                    customers trust on our quality product\
                    and trust own our product. If you interested,\
                    contact us."
          }
          maxWidth={"sm"}
          mx={"auto"}
          textAlign={"center"}
        />
      </Box>

      <Box
        sx={{
          maxWidth: 700,
          width: "100%",
        }}
      >
        <Carousel
          centerSlidePercentage={40}
          thumbWidth={180}
          dynamicHeight={false}
          centerMode={false}
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Gallery;
