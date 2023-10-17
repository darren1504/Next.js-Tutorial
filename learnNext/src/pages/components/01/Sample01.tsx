import { Box, Flex, Heading, Text, Wrap } from "@chakra-ui/react";

export default function Sample01() {
  return (
    <>
      <Heading fontSize={"2xl"}>Sample 01 - Learn Chakra UI</Heading>
      <Flex gap={"2rem"}>
        <Wrap p={"2rem"}>
          <Box>
            <Text fontSize={"1rem"}>Simple Text Format</Text>
          </Box>
          <Box>
            <Text fontSize={"1rem"}>Simple Text Format</Text>
          </Box>
        </Wrap>
        <Box>
          <Text fontSize={"1rem"}>Simple Text Format</Text>
        </Box>
      </Flex>
    </>
  );
}
