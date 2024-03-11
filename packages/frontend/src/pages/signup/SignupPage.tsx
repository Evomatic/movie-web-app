import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from "@mantine/core";
import classes from "./signupPage.module.css";
import { useSignupMutation } from "../../services/auth.service";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, ChangeEvent } from "react";
import { setAuthenticatedUser } from "../../redux/slices/auth.slice";

export function SignupPage() {
  const [password, setPassword] = useState("password");
  const [email, setEmail] = useState("email");
  const [signup, { data, error }] = useSignupMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data && !error) {
      console.log("signupPage:: data:", data);
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(setAuthenticatedUser(data));
      navigate("/login");
    } else if (error) {
      console.log(`signupPage:: Authentication error`, error);
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

  const handleSignup = () => {
    signup({ email, password });
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Please sign up!
      </Title>
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
        <Button fullWidth mt="xl" onClick={handleSignup}>
          Sign up
        </Button>
      </Paper>
    </Container>
  );
}
