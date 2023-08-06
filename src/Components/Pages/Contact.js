import React from "react";
import Layout from "../layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
  return (
    <>
      <Layout>
        <Box sx={{ my: 5, ml: 10, $h4: { fontWeight: "bold", mb: 2 } }}>
          <Typography variant="h4">Contact my Resturant</Typography>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            laborum repellat vitae tempora, asperiores quisquam accusantium
            obcaecati, soluta, mollitia voluptatibus consectetur ab atque!
          </p>
        </Box>
        <Box
          sx={{
            m: 3,
            width: "600px",
            ml: "10",
            "@media (max-width:600px)": {
              width: "400px",
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="Contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ backgroundColor: "black", color: "whitesmoke" }}
                    align="center"
                  >
                    Contact details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "blueviolet", pt: 1 }} />
                    1800-800-00 (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color: "blueviolet", pt: 1 }} />
                    Foodplaza@gmail.com
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
    </>
  );
};

export default Contact;
