import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { socialMedia } from "../../../constant";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          {socialMedia.map((social, index) => (
            <div>
            <img key={social.id} src={social.icon} alt="social" className= {`flex flex-1 ${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0' } w-[21px] h-[21px] object-contain cursor-pointer `}  />

            </div>
        ))}

          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Button className="pb-5 text-black" variant="h6" gutterBottom>
            About
          </Button>
          <Button className="pb-5 text-black" variant="h6" gutterBottom>
            About
          </Button>
          <Button className="pb-5 text-black" variant="h6" gutterBottom>
            About
          </Button>
          <Button className="pb-5 text-black" variant="h6" gutterBottom>
            About
          </Button>
        </Grid>
      </Grid>
      Footer
    </div>
  );
};

export default Footer;
