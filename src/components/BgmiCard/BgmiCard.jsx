import { Box, Typography } from "@mui/material";
const BgmiCard = ({ match }) => {
  return (
    <Box>
      <Typography>{match.id}</Typography>
      <Typography variant="h5">{match.title}</Typography>
    </Box>
  );
};

export default BgmiCard;
