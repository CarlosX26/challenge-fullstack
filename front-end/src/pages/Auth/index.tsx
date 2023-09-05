import { Flex, Heading } from "@chakra-ui/react"
import { FormLogin } from "../../components/Forms/Login"

export const AuthPage = () => {
  return (
    <Flex minH="100vh" justifyContent="center">
      <Flex
        w={{ base: "90%", md: "50%" }}
        px="1rem"
        justifyContent="center"
        alignItems="center"
      >
        <FormLogin />
      </Flex>

      <Flex
        display={{ base: "none", md: "flex" }}
        w="50%"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
        borderRadius="56px 0 0 56px"
        bgGradient="linear(to-r, teal.600, gray.700)"
      >
        <Heading color="white">BEST</Heading>
        <Heading color="white">SHOP</Heading>
      </Flex>
    </Flex>
  )
}
