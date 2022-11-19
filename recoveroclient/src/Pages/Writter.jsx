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
  Textarea,
} from "@chakra-ui/react";
// imports redux
import { getWritterData } from "../Redux/Writer/action";
import { postWritterData } from "../Redux/Writer/action";

const Writter = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [postedAt, setPostedAt] = useState("");

  const addWritter = () => {
    console.log(title, image, content, postedAt);
    const payload = {
      name: name,
      email: email,
      title: title,
      image: image,
      postedAt: postedAt,
      content: content,
    };
    dispatch(postWritterData(payload)).then(() => {
      dispatch(getWritterData());
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
                Write Your Blog here{" "}
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
                <FormControl id="Title">
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormControl>
                <FormControl id="Image">
                  <FormLabel>Image</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </FormControl>
                <FormControl id="PostedAt">
                  <FormLabel>PostedAt</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setPostedAt(e.target.value)}
                  />
                </FormControl>
                <FormControl id="Contract"></FormControl>
                <FormControl id="Location">
                  <FormLabel>Content</FormLabel>
                  <Textarea
                    placeholder="Write your Blog here"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                    color={"white"}
                    onClick={() => addWritter()}
                  >
                    Post Your Blog
                  </Button>
                  <Button
                    bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                    color={"white"}
                    onClick={() => navigate("/Blog")}
                  >
                    Show Blog
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

export default Writter;
