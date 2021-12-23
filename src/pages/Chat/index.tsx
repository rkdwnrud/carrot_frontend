import {
  AppBar,
  Avatar,
  Grid,
  Toolbar,
  Typography,
  Button,
  Icon,
  IconButton,
  Box,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import moment from "moment";
import { messages } from "./data";
import Chip from "@mui/material/Chip";

const Chat = (): JSX.Element => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#ffffff", color: "#000000" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={1}>
              <Avatar variant="rounded" />
            </Grid>
            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">사가세요.....</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">16000원</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Button color="secondary" variant="outlined">
                거래 후기 남기기
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box>
        <Grid container>
          {messages.map((message): JSX.Element => {
            return (
              <Grid item xs={12} key={message.id}>
                {message.sender !== myID && (
                  <Box display="flex" justifyContent="left" alignItems="end">
                    <Chip label={message.message} />
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                  </Box>
                )}
                {message.sender === myId && (
                  <Box display="flex" justifyContent="right" alignItems="end">
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                    <Chip label="message.message" />
                  </Box>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "#ffffff",
        }}
      >
        <Grid container>
          <Grid item xs={11}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <SendIcon />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Chat;
