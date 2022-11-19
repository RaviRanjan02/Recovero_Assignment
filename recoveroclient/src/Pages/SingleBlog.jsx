import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  Container,
  Tag,
} from "@chakra-ui/react";
import { getWritterData } from "../Redux/Writer/action";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SingleBlog = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const Blog = useSelector((state) => state.WritterReducer.Writter);

  const [currentBlog, setCurrentBlog] = useState({});

  useEffect(() => {
    if (Blog.length === 0) {
      dispatch(getWritterData());
    }
  }, [dispatch, Blog.length]);

  useEffect(() => {
    if (id) {
      const current = Blog.find((album) => album.id === Number(id));
      current && setCurrentBlog(current);
    }
  }, [id, Blog]);

  return (
    <Box>
      <Container maxW={"7xl"} p="12" minH={"100vh"}>
        <Heading as="h2" marginTop="5">
          Latest articles
        </Heading>
        <Divider marginTop="5" />

        <Box w="100%" display={"flex"} flexDirection={"column"} gap={"30px"}>
          <Box borderRadius="lg" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src={currentBlog?.image}
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Link>
          </Box>
          <Heading fontSize="xl" marginTop="2">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              {currentBlog?.title}
            </Link>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            {currentBlog?.content}
          </Text>
          <Box display={"flex"} justifyContent={"space-evenly"}>
            <Tag bg={"blue.800"} color={"white"} width={"40%"}>
              {currentBlog?.name}
            </Tag>
            <Tag bg={"blue.800"} color={"white"} width={"40%"}>
              {currentBlog?.email}
            </Tag>
          </Box>
        </Box>
        <Divider marginTop="5" />
      </Container>
    </Box>
  );
};

export default SingleBlog;
