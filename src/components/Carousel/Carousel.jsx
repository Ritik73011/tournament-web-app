import { Box } from "@mui/material";
import Carousel from "nuka-carousel";
const Carousels = () => {
  const arr = [
    "https://wallpapers.com/images/featured/53iv6fl796p3l763.jpg",
    "https://firebasestorage.googleapis.com/v0/b/agumentik-company.appspot.com/o/unnamed%20(1).png?alt=media&token=2b111131-eecc-4c2d-be5b-b27ebaa4b977",
    "https://images.hindustantimes.com/tech/img/2022/06/23/1600x900/54f31449f5f91cf0cc223cc635cd5952jpg_1655955051259_1655955067513.jpeg",
    "https://4kwallpapers.com/images/wallpapers/bgmi-jinx-pubg-arcane-crossover-2022-games-3440x1440-7316.jpg",
  ];

  return (
    <Box>
      <Carousel autoplayInterval={3000} autoplay={true}>
        {arr.map((ele, indx) => {
          return (
            <img
              key={indx + 1}
              src={ele}
              alt="img"
              style={{ width: "100%", height: "100%",maxHeight:"600px" }}
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Carousels;
