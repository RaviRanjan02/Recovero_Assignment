import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Redux/WriterAuth/action';
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
import { GET_REGISTER_SUCCESS } from '../Redux/WriterAuth/actionTypes';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = () => {
        const payload = {email,password,name};
        dispatch(registerUser(payload))
        .then((res) => {
            if(res.type == GET_REGISTER_SUCCESS){
                navigate("/login")
            }
        })
    }

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
                Register Here{" "}
              </Heading>
            </Stack>
            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <FormControl id="Company">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={name} onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
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
                    onClick={handleRegister}
                  >
                    Register
                  </Button>
                  <Button
                    bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                    color={"white"}
                    onClick={() => navigate("/login")}
                  >
                    Login 
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </Box>
  )
}

export default Register