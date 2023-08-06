import React from "react";
import { MenuList } from "../data/Data";
import Layout from "../layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import "../style/Homestyle.css";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import {ADD} from '../../redux/actions/action';
const Menu = () => {
  const dispatch= useDispatch();

  const Send=(e)=>{
    console.log(e);
    dispatch(ADD(e))
  }
  return (
    <>
      <Layout>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {MenuList.map((menu) => (
            <Card
              key={menu.id}
              sx={{ maxWidth: "390px", display: "flex", m: 2 }}
            >
              <CardActionArea component="div">
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterbottom="true"
                    component={"div"}
                  >
                    {menu.name}
                  </Typography>
                  <Typography variant="body2">Price: ₹{menu.price}</Typography>
                  <Stack spacing={2} direction="row" justifyContent={"center" } >
                    <Button onClick={()=>Send(menu)}sx={{width:"30%"}}
                      className="cart-button"
                      key={menu.id + "button"}
                      variant="contained"
                      color="success"
                    >
                      Add
                    </Button>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Layout>
    </>
  );
};

export default Menu;
