import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/slices/users/userSlice";
import { formatPhone } from "../utils/methods";
import { Button, TextField, Typography } from "@mui/material";

const UpdateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState(0);

  const { id } = useParams();

  const dispatch = useDispatch();
  const { currentUser, users } = useSelector((state) => ({
    users: state.users,
    currentUser: state.users.find((user) => user.id === Number(id)),
  }));
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !age || !phone) {
      toast.error("Please fill in all fields!!");
      return;
    }

    if (
      users.filter((user) => user.email === email && user.id !== currentUser.id)
        .length > 0
    ) {
      toast.error("Email already exists!!");
      return;
    }

    const user = {
      id: currentUser.id,
      name,
      email,
      age,
      phone: formatPhone(phone),
    };

    dispatch(updateUser(user));
    toast.success("User updated successfully!!");
    navigate("/");
  };

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setAge(currentUser.age);
      setPhone(Number(currentUser.phone.split("-").join("").trim()));
    }
  }, [currentUser]);

  if (!currentUser) {
    return (
      <Typography variant="h4" fontWeight={600} textAlign="center">
        User not found
      </Typography>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <TextField
        id="name"
        type="text"
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="email"
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="age"
        type="number"
        label="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <TextField
        id="phone"
        type="number"
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button
        sx={{
          mt: 3,
        }}
        type="submit"
        variant="contained"
        color="primary"
      >
        Update User
      </Button>
    </form>
  );
};

export default UpdateForm;
