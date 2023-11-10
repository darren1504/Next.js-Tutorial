import { Box, Button, Flex, Heading, Text, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import style from "@/styles/Sample01.module.scss";

export default function Sample01() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading fontSize={"2xl"}>Sample 01 - Learn Chakra UI</Heading>
      <Flex gap={"2rem"} p={"1rem 0.5rem"}>
        <Text p={"1rem 4rem"}>{count}</Text>
        <Button onClick={() => setCount(count + 1)}>+</Button>
        <Button onClick={() => setCount(count - 1)}>-</Button>
      </Flex>
      <Box>
        <Text className={style.text}>Sample Box</Text>
      </Box>
      <Box>
        <Text className={style.text}>Sample Box 2</Text>
      </Box>
    </>
  );
}
