import { Card, Typography,CardContent } from "@mui/material";
import { Box } from "@mui/system";
const BgmiCard = ({ match }) => {
  return (
    <Card sx={{ minWidth:"300px",maxWidth:"400px",width:"100%" }}>
    <CardContent>
     <Box sx={{width:"100%",position:"relative"}}>
        <img width={'100%'} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e97a75100099495.60427765e8dd2.jpg" alt="" />
        <Typography sx={{color:"white",position:"absolute",top:4,left:6 }}>#id: {match.id}</Typography>
        <Typography sx={{color:"white",position:"absolute",top:4,right:6 }}>{match.map}</Typography>
     </Box>
     <Typography variant="h6">{match.map} {match.title}</Typography>
    </CardContent>
  </Card>
  );
};

export default BgmiCard;
