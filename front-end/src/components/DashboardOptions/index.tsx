import { ComponentWithAs, Flex, Heading, IconProps } from "@chakra-ui/react"
import { useAdminContext } from "../../contexts/adminContext"
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons"

export const DashboardOptions = () => {
  const { onOpen } = useAdminContext()

  const options: {
    name: string
    icon: ComponentWithAs<"svg", IconProps>
    action: () => void
  }[] = [
    {
      name: "Adicionar produto",
      icon: AddIcon,
      action: onOpen,
    },
    {
      name: "Editar produto",
      icon: EditIcon,
      action: () => {},
    },
    {
      name: "Deletar produto",
      icon: DeleteIcon,
      action: () => {},
    },
  ]
  return (
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
          onClick={option.action}
        >
          <Heading fontSize="md" _groupHover={{ color: "white" }}>
            {option.name}
          </Heading>

          {<option.icon w="8" h="8" _groupHover={{ color: "white" }} />}
        </Flex>
      ))}
    </Flex>
  )
}
