import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Avatar } from "@mui/material";
// import Avatar from "@mui/material/Avatar";

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







const initialNewUserState = {
  name: "",
  id: "",
  dec: "",
  profileImg: "",
};

export default function UsersCom() {
  const [newInput,setNewInput]=React.useState(initialNewUserState)
  const [newUser, setNewUser] = React.useState(users);
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewInput((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddNewUser = () => {
    setIsFormOpen(true);
  };

  const handleSaveUser = () => {
    // Check if required fields are filled
    if (newInput.name.trim() === '' || newInput.id.trim() === '' || newInput.dec.trim() === '' || newInput.profileImg.trim() === '') {
      alert('Please fill in all required fields');
      return;
    }

    // Add the new user to the array
    newUser.push(newInput);
    setNewInput(initialNewUserState);
    setIsFormOpen(false);
  };

  // Remove the new user to the array
  const handleRemoveUser = (i) => {
    // Create a new array with the user to be removed
    console.log(i);
    const updatedUsers = [...newUser];
    updatedUsers.splice(i, 1);
    console.log(updatedUsers);
    setNewUser(updatedUsers);

  };
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button variant="contained" onClick={handleAddNewUser}>Add a New User</Button>
        {newUser.map((e, i) => (
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
                <Button variant="contained" onClick={() => handleRemoveUser(i)}>remove</Button>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>



      {/*New User Form */}
      <Dialog open={isFormOpen} onClose={handleCloseForm}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill in the details for the new user.</DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="User Name"
            fullWidth
            value={newUser.name}
            onChange={handleInputChange}
          />
          <TextField
            required
            margin="dense"
            id="id"
            name="id"
            label="User ID"
            fullWidth
            value={newUser.id}
            onChange={handleInputChange}
          />
          <TextField
            required
            margin="dense"
            id="dec"
            name="dec"
            label="User Description"
            fullWidth
            value={newUser.dec}
            onChange={handleInputChange}
          />
          <TextField
            required
            margin="dense"
            id="profileImg"
            name="profileImg"
            label="Profile Image URL"
            fullWidth
            value={newUser.profileImg}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button onClick={handleSaveUser}>Save</Button>
        </DialogActions>
      </Dialog>

    </>
  );
}