import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import "../images/cart.gif";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../../redux/actions/action";
import "../style/Head.css";
import { Table } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [price, setPrice] = useState(0);
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handledrawertoggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [popupmenuposition, setPopupmenuPosition] = useState(null);
  const open = Boolean(popupmenuposition);
  const handleClick = (event) => {
    setPopupmenuPosition(event.currentTarget);
  };
  const handleClose = () => {
    setPopupmenuPosition(null);
  };
  const dlt = (id) => {
    dispatch(DLT(id));
  };
  const total = () => {
    let price = 0;
    getdata.map((ele) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };
  useEffect(() => { 
    total();
  }, [total]);

  //menu drawer
  const drawer = (
    <Box onClick={handledrawertoggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"#dfe6e9"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1, my: 2 }}
      >
        <FastfoodIcon />
        Food plaza
      </Typography>
      {/* new box for navigation items */}

      <ul className="mobilenavmenu">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>

        <li>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Link to={"/cart"}>
            Add to Cart
            </Link>
          </Badge>
          <Menu
            id="basic-menu"
            anchorEl={popupmenuposition}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div className="card-details">
              <CloseIcon
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 28,
                  cursor: "pointer",
                }}
              />
              <p>Your cart is epmty</p>
              {/* <img src="..\images\cart.gif" alt="" /> */}
            </div>
          </Menu>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handledrawertoggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"#dfe6e9"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              Food plaza
            </Typography>
            <Divider />
            {/* new box for navigation items */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navmenu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                {/* login &logout with auth0  */}
                {isAuthenticated ? (
                  <li>
                    <button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                      style={{ backgroundColor: "#a29bfe", color: "black" }}
                    >
                      Log Out
                    </button>
                  </li>
                ) : (
                  <li>
                    <button
                      onClick={() => loginWithRedirect()}
                      style={{ backgroundColor: "#a29bfe", color: "black" }}
                    >
                      Log In
                    </button>
                  </li>
                )}

                <li>
                  
                  <Menu
                    id="basic-menu"
                    anchorEl={popupmenuposition}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {getdata.length ? (
                      <div className="card_details" style={{ width: "24rem" }}>
                        <Table>
                          <thead className="thead">
                            <tr>
                              <th>photo</th>
                              <th>Resturant Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {getdata.map((e) => {
                              return (
                                <>
                                  <tr>
                                    <td>
                                      <NavLink
                                        to={`/cart/${e.id}`}
                                        onClick={handleClose}
                                      >
                                        <img
                                          src={e.image}
                                          style={{
                                            width: "5rem",
                                            height: "5rem",
                                          }}
                                          alt=""
                                        />
                                      </NavLink>
                                    </td>
                                    <td>
                                      <p>{e.name}</p>
                                      <p>price: ₹{e.price}</p>
                                      <p>Quantity: {e.qnty}</p>
                                      <p>
                                        <DeleteIcon
                                          style={{
                                            color: "red",
                                            fontSize: 20,
                                            cursor: "pointer",
                                          }}
                                          onClick={() => dlt(e.id)}
                                        />
                                      </p>
                                    </td>
                                    {/* <td className='mt-5'style={{color:"red",fontSize:15,cursor:"pointer"}}>
                             <DeleteIcon/>

                             </td> */}
                                  </tr>
                                </>
                              );
                            })}
                            <p className="text-center">Total :₹{price}</p>
                          </tbody>
                        </Table>
                      </div>
                    ) : (
                      <div
                        className="card-details "
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <CloseIcon
                          onClick={handleClose}
                          style={{
                            position: "absolute",
                            top: 0,
                            right: 3,
                            fontSize: 18,
                            cursor: "pointer",
                            padding: 2,
                            margin: 0,
                          }}
                        />

                        <p>Your cart is empty </p>
                        {/* <img src="../images/cart.gif" alt="" /> */}
                      </div>
                    )}
                  </Menu>
                </li>
              </ul>
            </Box>
            <Badge
                    badgeContent={getdata.length}
                    color="primary"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    // onClick={handleClick}
                  >
                    
                    <Link to={"/cart"}><ShoppingCartIcon
                      // onClick={handleClick}
                      sx={{ color: "whitesmoke" }}
                    /></Link>
                  </Badge>
          </Toolbar>


          
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handledrawertoggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "&.MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
