import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../redux/slices/users/userSlice";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Icon,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const Users = () => {
  const users = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!users) {
    return (
      <Box px={20}>
        <Typography variant="h2" fontWeight={600} py={5} align="center">
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Box px={20}>
      <Typography variant="h2" fontWeight={600} py={5} align="center">
        Users
      </Typography>

      {users.length === 0 && (
        <Typography variant="h3" color="gray" py={5} align="center">
          No users found!!
        </Typography>
      )}

      {users.length > 0 && (
        <TableContainer>
          <Table aria-label="users table">
            <TableHead
              sx={{
                backgroundColor: "#000",
              }}
            >
              <TableRow>
                {Object.keys(users[0]).map((key) => (
                  <TableCell
                    sx={{
                      color: "#fff",
                      textTransform: "capitalize",
                    }}
                    align="center"
                    key={key + 6556532}
                  >
                    {key}
                  </TableCell>
                ))}
                <TableCell
                  sx={{
                    color: "#fff",
                    textTransform: "capitalize",
                  }}
                  align="center"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell align="center">{user.id}</TableCell>
                  <TableCell align="center">{user.name}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.phone}</TableCell>
                  <TableCell align="center">{user.age}</TableCell>
                  <TableCell align="center">
                    <Button
                      startIcon={<Icon component={Edit} />}
                      variant={"text"}
                      size={"small"}
                      mr={2}
                      color={"primary"}
                      onClick={() => {
                        navigate(`/users/edit/${user.id}`);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      startIcon={<Icon component={Delete} />}
                      variant={"text"}
                      size={"small"}
                      color={"error"}
                      onClick={() => {
                        dispatch(deleteUser(user.id));
                        toast.success("User deleted successfully");
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Users;
