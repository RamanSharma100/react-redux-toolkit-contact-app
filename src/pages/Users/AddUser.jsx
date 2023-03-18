import { Box, Typography } from "@mui/material";
import { AddForm } from "../../components";

const AddUser = () => {
  return (
    <Box>
      <Typography variant="h2" py={5} fontWeight={600} textAlign="center">
        Add User
      </Typography>

      <Box width={"40%"} pt={4} mx={"auto"}>
        <AddForm />
      </Box>
    </Box>
  );
};

export default AddUser;
