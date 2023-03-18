import { Box, Typography } from "@mui/material";
import { UpdateForm } from "../../components";

const EditUser = () => {
  return (
    <Box>
      <Typography variant="h2" py={5} fontWeight={600} textAlign="center">
        Edit User
      </Typography>

      <Box width={"40%"} pt={4} mx={"auto"}>
        <UpdateForm />
      </Box>
    </Box>
  );
};

export default EditUser;
