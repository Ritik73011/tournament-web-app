import { Box } from "@mui/material";
import Carousel from "nuka-carousel";
const Carousels = () => {
  const arr = [
    "https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320",
    "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__340.jpg",
  ];

  return (
    <Box>
      <Carousel>
        {arr.map((ele, indx) => {
          return (
            <img
              key={indx + 1}
              src={ele}
              alt="img"
              style={{ width: "100%", height: "400px" }}
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Carousels;
