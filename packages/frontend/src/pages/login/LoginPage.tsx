import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import classes from "./loginPage.module.css";
import { useLoginMutation } from "../../services/auth.service";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, ChangeEvent } from "react";
import { setAuthenticatedUser } from "../../redux/slices/auth.slice";

export function LoginPage() {
  const [password, setPassword] = useState("password");
  const [email, setEmail] = useState("email");
  const [login, { data, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data && !error) {
      console.log("LoginPage:: data:", data);
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(setAuthenticatedUser(data));
      navigate("/home");
    } else if (error) {
      console.log(`LoginPage:: Authentication error`, error);
    }
  }, [data, error, dispatch, navigate]);

  const passwordOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const emailOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleLogin = () => {
    login({ email, password });
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" href="/signup">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="youremail@email.com"
          required
          onChange={emailOnChange}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          onChange={passwordOnChange}
        />
        <Button fullWidth mt="xl" onClick={handleLogin}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
