import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import AddLocationTwoToneIcon from "@mui/icons-material/AddLocationTwoTone";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { menuItemClasses } from "@mui/material";
type MenuType = {
  title: string;
  icon: JSX.Element;
};
const MenuStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  padding: "10px 5px",
};
const ButtomAppBar = (): JSX.Element => {
  const menuItems: MenuType[] = {
    title: "홈",
    icon: <HomeIcon />,
  };
  const menuItems: MenuType[] = {
    title: "동네생활",
    icon: <FeaturedPlayListOutlinedIcon />,
  };
  const menuItems: MenuType[] = {
    title: "내근처",
    icon: <AddLocationTwoToneIcon />,
  };
  const menuItems: MenuType[] = {
    title: "채팅",
    icon: <ChatBubbleOutlineOutlinedIcon />,
  };
  const menuItems: MenuType[] = {
    title: "나의 당근",
    icon: <PersonOutlineOutlinedIcon />,
  };
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container>
          {menuItemClasses.map((item: MenuType): JSX.Element => {
            return (
              <Grid item xs key={item.title}>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    style={MenuStyle}
                  >
                    {item.icon}
                    {item.title}
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default ButtomAppBar;
