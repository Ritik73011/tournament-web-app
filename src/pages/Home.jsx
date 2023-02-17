import { Box,useMediaQuery } from "@mui/material"
import Bgmi from "../components/BGMI/Bgmi"
import Carousels from "../components/Carousel/Carousel"

const Home = () => {
  const media = useMediaQuery("(max-width:900px)");
  const media2 = useMediaQuery("(max-width:600px)");
  const style900 = {
    marginTop:media?"64px":"68.5px",
  }
  const style600 ={
    marginTop:"56px"
  }
  return (
    <Box sx={media2?style600:style900}>
      <Carousels/>
      <Bgmi/>
    </Box>
  )
}

export default Home