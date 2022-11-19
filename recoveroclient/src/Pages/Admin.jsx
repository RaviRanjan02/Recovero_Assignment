import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// all chakra imports
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
// redux imports
import { getAdminData } from "../Redux/Admin/action";
import { postAdminData } from "../Redux/Admin/action";

const Admin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  
  const [email, setEmail] = useState("");

  const addAdmin = () => {
    console.log(name, email);
    const payload = {
      name: name,
      email: email,
    };
    dispatch(postAdminData(payload)).then(() => {
      dispatch(getAdminData());
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
                Add Content Writter{" "}
              </Heading>
            </Stack>
            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <FormControl id="Company">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="Position">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <Stack spacing={10}>
                  <Button
                    bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                    color={"white"}
                    onClick={() => addAdmin()}
                  >
                    Add
                  </Button>
                  <Button
                    bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                    color={"white"}
                    onClick={() => navigate("/admintask")}
                  >
                    Show Writter and Blog
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

export default Admin;
