import { Box } from "@mui/material";
import QuoteForm from "./QuoteForm";

const Quote = () => {
  return (
    <Box>
      <Box sx={{ position: "relative", backgroundColor: "#f7f7f7" }}>
        <Box
          component="img"
          src="https://cityscape.wowtheme7.com/assets/message-img-C3fho8PI.png"
        ></Box>
        <Box
          sx={{
            position: {
              lg: "absolute",
              md: "absolute",
              sm: "static",
              xs: "static",
            },
            top: "15%",
            right: "5%",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: (theme) => theme.shadows[5],
          }}
        >
          <QuoteForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Quote;
