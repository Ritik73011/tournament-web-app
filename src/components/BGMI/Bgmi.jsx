import { Box, Typography } from "@mui/material";
import BgmiCard from "../BgmiCard/BgmiCard";
const Bgmi = () => {
  const arr = [
    {
      id: 1,
      title: "Match 1",
      seat: "100",
      joined: "42",
      type: "Squad",
      version: "TPP",
      perKill: "12",
      entryFee: "20",
      map: "Erangle",
    },
    {
      id: 2,
      title: "Match 2",
      seat: "100",
      joined: "0",
      type: "Solo",
      version: "TPP",
      perKill: "12",
      entryFee: "20",
      map: "Livik",
    },
    {
      id: 3,
      title: "Match 3",
      seat: "100",
      joined: "11",
      type: "Squad",
      version: "TPP",
      perKill: "12",
      entryFee: "20",
      map: "Miramar",
    },
    {
      id: 4,
      title: "Match 4",
      seat: "100",
      joined: "23",
      type: "Squad",
      version: "TPP",
      perKill: "12",
      entryFee: "20",
      map: "Erangle",
    },
    {
      id: 5,
      title: "Match 5",
      seat: "100",
      joined: "96",
      type: "Solo",
      version: "TPP",
      perKill: "12",
      entryFee: "20",
      map: "Sanhok",
    },
  ];
  return (
    <Box sx={{ textAlign: "left", margin: "8px 0" }}>
      <Typography variant="h4">Battle Ground Mobile India</Typography>
      <Box sx={{ width: "100%", height: "320px", background: "pink" }}>
        {arr.map(
          ({
            id,
            title,
            map,
            seat,
            joined,
            type,
            version,
            perKill,
            entryFee,
          }) => {
            return (
              <BgmiCard
                key={id}
                match={{
                  id,
                  title,
                  map,
                  seat,
                  joined,
                  type,
                  version,
                  perKill,
                  entryFee,
                }}
              />
            );
          }
        )}
      </Box>
    </Box>
  );
};

export default Bgmi;
