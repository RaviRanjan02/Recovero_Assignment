import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Tag,
  Container,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getWritterData } from "../Redux/Writer/action";
import { deleteWritterData } from "../Redux/Writer/action";
import { useNavigate } from "react-router-dom";

const AdminTask = () => {
  //  blog
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const Blog = useSelector((state) => state.WritterReducer.Writter);

  useEffect(() => {
    dispatch(getWritterData());
  }, []);

  const handleDelete = (Id) => {
    dispatch(deleteWritterData(Id)).then(() => {
      dispatch(getWritterData());
    });
  };

  return (
    <>
      <Container maxW={"7xl"} p="12" minH={"100vh"}>
        <Heading as="h1">All Blog and Writter</Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
          gap={"30px"}
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            flexDirection={"column"}
            position="relative"
            alignItems="center"
            gap={"30px"}
          >
            {Blog.length > 0 &&
              Blog.map((el, id) => {
                return (
                  <>
                    <Box
                      width={{ base: "100%", sm: "85%" }}
                      zIndex="2"
                      marginLeft={{ base: "0", sm: "5%" }}
                      marginTop="5%"
                    >
                      <Link
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                      >
                        <Image
                          borderRadius="lg"
                          src={`${el.image}`}
                          alt="some good alt text"
                          objectFit="contain"
                        />
                      </Link>
                    </Box>
                  </>
                );
              })}
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            {Blog.length > 0 &&
              Blog.map((el, id) => {
                return (
                  <>
                    <Heading marginTop="1">
                      <Link
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                      >
                        {`${el.title}`}
                      </Link>
                    </Heading>
                    <Text as="p" marginTop="2" fontSize="lg">
                      {`${el.content}`}
                    </Text>
                    <Box
                      display={"flex"}
                      justifyContent={"space-around"}
                      marginTop={"20px"}
                    >
                      <Tag bg={"orange.400"} color={"white"} width={"40%"}>
                        {`${el.name}`}
                      </Tag>
                      <Tag bg={"orange.400"} color={"white"} width={"40%"}>
                        {`${el.email}`}
                      </Tag>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-around"}
                      marginTop={"20px"}
                    >
                      <Button
                        rounded={"full"}
                        bgGradient="linear(to-r, teal.500, green.500)"
                        _hover={{
                          bgGradient: "linear(to-r, red.500, yellow.500)",
                        }}
                        color={"white"}
                        onClick={() => navigate(`/blog/${el.id}`)}
                      >
                        Publish
                      </Button>
                      <Button
                        rounded={"full"}
                        bgGradient="linear(to-r, teal.500, green.500)"
                        _hover={{
                          bgGradient: "linear(to-r, red.500, yellow.500)",
                        }}
                        color={"white"}
                        onClick={() => handleDelete(el.id)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </>
                );
              })}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AdminTask;
