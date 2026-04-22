import React from "react";
// MUI - Built-in components with automatic styling
import { TextField, Button, Box, Typography } from "@mui/material";

const QuoteForm = () => {
  return (
    <div>
      <Box sx={{ padding: "50px" }}>
        <Typography
          variant="h2"
          sx={{
            paddingBottom: "30px",
            fontSize: { lg: "4rem", md: "3rem", sm: "2rem", xs: "1rem" },
          }}
        >
          Get A Quote
        </Typography>
        <Box component="form">
          <Box sx={{ display: "flex", flexDirection: "column", gap: "50px" }}>
            <Box sx={{ display: "flex", justifyContent:"space-between", gap:"50px" }}>
              <TextField label="Name" type="text" variant="outlined" fullWidth required />
              <TextField
                label="Your Phone"
                type="text"
                variant="outlined"
                fullWidth
                required
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "50px",
              }}
            >
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Your Address"
                type="text"
                variant="outlined"
                fullWidth
                required
              />
            </Box>

            <Box>
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
            </Box>
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "#f58a20", fontSize: "1.2rem" }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default QuoteForm;
