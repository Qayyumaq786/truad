import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const users = [
  {
    name: "jone doe",
    id: "abc1fnbhsjf111",
    dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
    profileImg:
      "https://wallpapers.com/images/high/professional-profile-pictures-2880-x-1920-7jvygpai7v9zkg2j.webp",
  },
  {
    name: "Aditya",
    id: "abc1fdhvbfd111",
    dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
    profileImg:
      "https://wallpapers.com/images/high/professional-profile-pictures-5472-x-3648-fnzog91drg7fwyv1.webp",
  },
  {
    name: "Ankit",
    id: "abc111hfsg1",
    dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
    profileImg:
      "https://wallpapers.com/images/high/professional-profile-pictures-4162-x-6243-ds59e3wn0uignqdp.webp",
  },
  {
    name: "Shubham",
    id: "abc1111hjsfv",
    dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
    profileImg:
      "https://wallpapers.com/images/high/professional-profile-pictures-3168-x-4752-ao04pefbccblobjh.webp",
  },
];

export default function UsersCom() {
  return (
      <Box
        sx={{
          marginTop:"20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {users.map((e, i) => (
          <Card
          key={`user${i}`}
            sx={{
              width: "90%",
              bgcolor: "#989898",
              boxShadow: "1px 1px 10px 2px #000000",
            }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                <Avatar
                  sx={{ width: 80, height: 80 }}
                  src={e.profileImg}
                ></Avatar>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ lineHeight: "16px" }}
                    component="div"
                  >
                    {e.name} <br />
                    <span style={{ fontSize: 10 }}> {e.id}</span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.dec}
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button variant="contained">remove</Button>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
  );
}