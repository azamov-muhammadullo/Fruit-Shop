import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import MediaCard from "../../components/Cards";
import { Link } from "react-router-dom";
import Footer from '../../components/Footer'



const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100%)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


export default function ProductCard() {

  const count = useSelector((state) => state.products.count);
  return (
    <Box sx={{ display: "flex", flexDirection:'column' }}>
      <Box>
        <AppBar
          style={{ backgroundColor: "#1976D2", border: "black" }}
          position="absolute"
        >
          <Toolbar>
            <div style={{ display: "flex" }}>
              <Typography variant="h6">
                Fruits Shop
              </Typography>

              <Link to="/table">
                <IconButton
                  style={{ position: "absolute", right: 50 }}
                  aria-label="cart"
                >
                  <StyledBadge badgeContent={count} color="primary">
                    <Link to='/tableDark'>
                      <ShoppingCartIcon style={{ color: "white" }} />
                    </Link>
                  </StyledBadge>
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <MediaCard/>
      <Footer/>
    </Box>
  );
}
