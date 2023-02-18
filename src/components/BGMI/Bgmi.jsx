import { Box, Typography } from "@mui/material";
import BgmiCard from "../BgmiCard/BgmiCard";
const Bgmi = () => {
  const arr = [
    { id: 1, title: "Match 1" },
    { id: 2, title: "Match 2" },
    { id: 3, title: "Match 3" },
    { id: 4, title: "Match 4" },
    { id: 5, title: "Match 5" },
  ];
  return (
    <Box sx={{ textAlign: "left", margin: "8px 0" }}>
      <Typography variant="h4">Battle Ground Mobile India</Typography>
      <Box sx={{ width: "100%", height: "320px", background: "pink" }}>
        {arr.map(({ id, title }) => {
          return <BgmiCard key={id} match={{ id, title }} />;
        })}
      </Box>
    </Box>
  );
};

export default Bgmi;
