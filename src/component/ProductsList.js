import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea , TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Avatar }  from "@mui/material";
// import Avatar from "@mui/material/Avatar";

const initialNewProductState = {
  name: "",
  dec: "",
  productImage: "",
};

// const products = [
//   {
//     name: "products1",
//     dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
//     productImage:
//       "https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Apple-Products-expected-to-launch-in-2023.png",
//   },
//   {
//     name: "products2",
//     dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
//     productImage:
//       "https://www.91-cdn.com/hub/wp-content/uploads/2023/01/HomePod-2nd-generation.jpg?tr=q-100",
//   },
//   {
//     name: "products3",
//     dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
//     productImage:
//       "https://www.91-cdn.com/hub/wp-content/uploads/2023/01/14-inch-and-16-inch-MacBook-Pro-with-M2-Pro-and-M2-Max.jpg?tr=q-100",
//   },
//   {
//     name: "products4",
//     dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
//     productImage:
//       "https://www.91-cdn.com/hub/wp-content/uploads/2023/01/Mac-mini-with-M2-1024x643.jpg?tr=q-100",
//   },
// ];

export default function ProductsList() {
  const [newProduct, setNewProduct] = React.useState(initialNewProductState);
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  
  
  const [products, setProducts] = React.useState([
    {
      name: "products1",
      dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
      productImage:
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Apple-Products-expected-to-launch-in-2023.png",
    },
    {
      name: "products2",
      dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
      productImage:
        "https://www.91-cdn.com/hub/wp-content/uploads/2023/01/HomePod-2nd-generation.jpg?tr=q-100",
    },
    {
      name: "products3",
      dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
      productImage:
        "https://www.91-cdn.com/hub/wp-content/uploads/2023/01/14-inch-and-16-inch-MacBook-Pro-with-M2-Pro-and-M2-Max.jpg?tr=q-100",
    },
    {
      name: "products4",
      dec: " The subject looks into the distance, showcasing a poised demeanor perfect for professional profile pictures, business portfolios, or corporate websites.",
      productImage:
        "https://www.91-cdn.com/hub/wp-content/uploads/2023/01/Mac-mini-with-M2-1024x643.jpg?tr=q-100",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleAddNewProduct = () => {
    setIsFormOpen(true);
  };

  const handleSaveProduct = () => {
    // Check if required fields are not filled
    if (newProduct.productImage.trim() === '' || newProduct.name.trim() === '' || newProduct.dec.trim() === '') {
      
      alert('Please fill in all required fields');
      return;
    }
    //Check if required fields are filled
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setNewProduct(initialNewProductState);
    setIsFormOpen(false);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
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
      <Button variant="contained" onClick={handleAddNewProduct}>Add New Products</Button>
       
        {products.map((e, i) => (
          <Card
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
                <Avatar variant="square" sx={{ width: 80, height: 80 }} src={e.productImage}>
                  
                </Avatar>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.dec}
                  </Typography>
                </CardContent>
              </Box>
              {/* <Box sx={{ display: "flex", gap: 1 }}>
                <Button variant="contained">Accept</Button>
                <Button variant="contained">Reject</Button>
              </Box> */}
            </CardActionArea>
          </Card>
        ))}
      </Box>

       {/* New Product Form */}
       <Dialog open={isFormOpen} onClose={handleCloseForm}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill in the details for the new product.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="productImage"
            name="productImage"
            label="Product Photo URL"
            fullWidth
            value={newProduct.productImage}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="name"
            name="name"
            label="Product Name"
            fullWidth
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="dec"
            name="dec"
            label="Product Description"
            fullWidth
            value={newProduct.dec}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button onClick={handleSaveProduct}>Save</Button>
        </DialogActions>
      </Dialog>

    </>
  );
}