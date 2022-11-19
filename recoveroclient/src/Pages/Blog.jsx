import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Tag,
  Divider,
  Container,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getWritterData } from "../Redux/Writer/action";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const Blog = useSelector((state) => state.WritterReducer.Writter);

  useEffect(() => {
    dispatch(getWritterData());
  }, []);

  return (
    <Container maxW={"7xl"} p="12" minH={"100vh"}>
      <Heading as="h1">Latest Articles</Heading>

      {Blog.length > 0 &&
        Blog.map((el, id) => {
          return (
            <>
              <Box
                marginTop={{ base: "1", sm: "5" }}
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                justifyContent="space-between"
              >
                <Box
                  display="flex"
                  flex="1"
                  marginRight="3"
                  position="relative"
                  alignItems="center"
                >
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
                        onClick={() => navigate(`/blog/${el.id}`)}
                      />
                    </Link>
                  </Box>
                  <Box
                    zIndex="1"
                    width="100%"
                    position="absolute"
                    height="100%"
                  >
                    <Box
                      bgGradient={
                        ("radial(orange.600 1px, transparent 1px)",
                        "radial(orange.300 1px, transparent 1px)")
                      }
                      backgroundSize="20px 20px"
                      opacity="0.4"
                      height="100%"
                    />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flex="1"
                  flexDirection="column"
                  justifyContent="center"
                  marginTop={{ base: "3", sm: "0" }}
                >
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
                    <Tag bg={"blue.800"} color={"white"} width={"40%"}>
                      {`${el.name}`}
                    </Tag>
                    <Tag bg={"blue.800"} color={"white"} width={"40%"}>
                      {`${el.email}`}
                    </Tag>
                  </Box>
                </Box>
              </Box>
              <Divider marginTop="5" />
            </>
          );
        })}
    </Container>
  );
};

export default Blog;
