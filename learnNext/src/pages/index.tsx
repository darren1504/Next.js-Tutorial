import { Button, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>header</h1>
        <Flex flexDirection={"column"} gap={"0.4rem"} w={"8rem"}>
          <Button colorScheme="blue">
            <Link href={"/components/01/Sample01"}>Sample01</Link>
          </Button>
        </Flex>
      </main>
    </>
  );
}