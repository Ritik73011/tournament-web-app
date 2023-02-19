import { Card, Typography, CardContent, Button, Slider } from "@mui/material";
import { Box } from "@mui/system";
const BgmiCard = ({ match }) => {
  return (
    <Card sx={{ minWidth: "300px", maxWidth: "400px", width: "100%" }}>
      <CardContent>
        <Box sx={{ width: "100%", position: "relative" }}>
          <img
            width={"100%"}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e97a75100099495.60427765e8dd2.jpg"
            alt=""
          />
          <Typography
            sx={{ color: "white", position: "absolute", top: 4, left: 6 }}
          >
            #id: {match.id}
          </Typography>
          <Typography
            sx={{ color: "white", position: "absolute", top: 4, right: 6 }}
          >
            {match.map}
          </Typography>
        </Box>
        <Typography variant="h6">
          {match.map} {match.title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between",marginTop:'8px' }}>
          <Typography>Type: {match.type}</Typography>
          <Typography>Version: {match.version}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "8px",
          }}
        >
          <Typography>Entry Fee: ₹{match.entryFee}</Typography>
          <Typography>Per Kill: ₹{match.perKill}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "16px", marginTop: "8px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              width: "100%",
              maxWidth: "70%",
              alignItems: "center",
              marginRight: "8px",
            }}
          >
            <Slider
              defaultValue={match.joined}
              size="small"
              max={match.seat}
              disabled
            />
            <Typography>
              {match.joined}/{match.seat}
            </Typography>
          </Box>
          <Button
            sx={{ background: "#030303", width: "100%", maxWidth: "30%" }}
          >
            JOIN
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BgmiCard;
