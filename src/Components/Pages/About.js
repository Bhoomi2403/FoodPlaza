import React from "react";
import Layout from "../layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Layout>
        <Box
        sx={{
          my:15,
          textAlign:'center',
          p:2,
          "& h4":{
            fontWeight:'bold',
            my:2,
            fontSize:"2rem",

          },
          "& p":{
            textAlign:"justify"
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:'1.6rem',
            }
          }
      
        }}>
          <Typography variant="h4">Welcome to my Resturant</Typography>
          <p>
            “Here, at FlavorFusions, in the center of Ahmedabad, we don't accept
            compromises. Not about our food. All our ingredients are sourced
            from local producers to ensure quality and freshness. That's why our
            menu is the best.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit a
            minima reprehenderit dicta incidunt nostrum cumque nam debitis
            consectetur voluptate similique quo porro optio amet inventore saepe
            ex, corrupti repellat enim! Ex repellendus quae porro tempora ullam
            quidem earum nemo nostrum quis obcaecati dicta consectetur enim eius
            reprehenderit suscipit voluptatibus minus explicabo sed hic
            accusantium, et fugit odit blanditiis rem! Nemo, qui? Expedita
            delectus eius sit quos aliquam, architecto, repellat illum id,
            impedit perferendis reiciendis totam quasi mollitia. Nemo ipsum
            veritatis soluta voluptas. Facilis, blanditiis ratione ad tenetur
            deleniti velit quidem a tempora magni excepturi obcaecati totam,
            asperiores dolores ipsam.
          </p>
        </Box>
      </Layout>
    </>
  );
};

export default About;
