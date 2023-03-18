import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/slices/users/userSlice";
import { formatPhone } from "../utils/methods";
import { Button, TextField } from "@mui/material";

const AddForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const { totalUsers, users } = useSelector(
    (state) => ({
      totalUsers: state.users.length,
      users: state.users,
    }),
    shallowEqual
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !age || !phone) {
      toast.error("Please fill in all fields!!");
      return;
    }

    if (users.find((user) => user.email === email)) {
      toast.error("Email already exists!!");
      return;
    }

    const user = {
      id: totalUsers + 1,
      name,
      email,
      age,
      phone: formatPhone(phone),
    };

    dispatch(addUser(user));
    toast.success("User added successfully!!");
    navigate("/");
  };

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
        Add User
      </Button>
    </form>
  );
};

export default AddForm;
