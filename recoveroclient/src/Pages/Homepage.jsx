import React from "react";
import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"l"}>
            <Heading fontSize={{ base: "4xl" }}>
              <Text
                color={"#2883AF"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
              >
                Welcome To Recovero Blog App
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}></Text>
            <Stack direction={{ base: "column" }} spacing={4}>
              <Button
                rounded={"full"}
                bgGradient="linear(to-r, teal.500, green.500)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
                color={"white"}
                onClick={() => navigate("/admin")}
              >
                Admin
              </Button>
              <Button
                rounded={"full"}
                bgGradient="linear(to-r, teal.500, green.500)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
                color={"white"}
                onClick={() => navigate("/writter")}
              >
                Content Writter
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            boxSize="750px"
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1557754897-ca12c5049d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGpvYnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }
          />
        </Flex>
      </Stack>
    </div>
  );
};

export default Homepage;
