import { Avatar, Flex } from "@chakra-ui/react"
import { Logo } from "../Logo"

export const Header = () => {
  return (
    <Flex as={"header"} w="100%" borderBottom="2px" borderColor="teal.600">
      <Flex
        w="90%"
        maxW="90%"
        m="0 auto"
        alignItems="center"
        justifyContent="space-between"
        minH="72px"
      >
        <Logo />

        <Avatar name={"CJ"} />
      </Flex>
    </Flex>
  )
}
