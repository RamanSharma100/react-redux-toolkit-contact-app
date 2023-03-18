import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={20}
      py={3}
      bgcolor={"black"}
      color={"white"}
    >
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        React + Redux Toolkit Contact App
      </Link>
      <Button
        variant="contained"
        color={"primary"}
        onClick={() => navigate("/users/add")}
      >
        Add User
      </Button>
    </Box>
  );
};

export default Navbar;
