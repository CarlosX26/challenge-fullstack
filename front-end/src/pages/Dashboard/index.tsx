import { ComponentWithAs, Flex, Heading, IconProps } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { Container } from "../../components/Container"
import { AddIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons"

export const Dashboard = () => {
  const options: {
    name: string
    icon: ComponentWithAs<"svg", IconProps>
  }[] = [
    {
      name: "Adicionar produto",
      icon: AddIcon,
    },
    {
      name: "Editar produto",
      icon: EditIcon,
    },
    {
      name: "Deletar produto",
      icon: DeleteIcon,
    },
  ]

  return (
    <>
      <Header />
      <Container>
        <Heading py="32px">Controle</Heading>
        <Flex as={"ul"} gap="1rem" flexDir={{ base: "column", md: "row" }}>
          {options.map((option) => (
            <Flex
              role="group"
              key={option.name}
              as={"li"}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              border="2px"
              borderColor="teal.600"
              borderRadius="md"
              w={{ base: "100%", md: "176px" }}
              h="176px"
              p="16px"
              gap="16px"
              cursor="pointer"
              _hover={{
                bg: "teal.600",
              }}
            >
              <Heading fontSize="md" _groupHover={{ color: "white" }}>
                {option.name}
              </Heading>

              {<option.icon w="8" h="8" _groupHover={{ color: "white" }} />}
            </Flex>
          ))}
        </Flex>
      </Container>
    </>
  )
}
