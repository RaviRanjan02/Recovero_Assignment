import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Heading,
  } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/WriterAuth//action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = () => {
    const payload = {
      email,
      password,
    };
    dispatch(login(payload)).then((res) => {
      let token = localStorage.getItem("token");
      if (token) {
        alert("Login Successfull");
        navigate("/writter");
      }
    });
  };

  return (
    <Box minH={"100vh"}>
    <form>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          width={"100%"}
        >
          <Stack align={"center"}>
            <Heading
              fontSize={"4xl"}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              Login Here{" "}
            </Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="Position">
                <FormLabel>Email</FormLabel>
                <Input
                  type={"email"}
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="Position">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>

              <Stack spacing={10}>
                <Button
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
                  color={"white"}
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Button
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
                  color={"white"}
                  onClick={() => navigate("/register")}
                >
                  Register 
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  </Box>
  );
};

export default Login;
