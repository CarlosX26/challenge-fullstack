import { defineStyleConfig } from "@chakra-ui/react"

const Button = defineStyleConfig({
  variants: {
    solid: {
      bg: "teal.600",
      color: "white",
      textTransform: "uppercase",
      fontWeight: "bold",
      _active: {
        bg: "teal.700",
      },
      _hover: {
        bg: "teal.700",
      },
    },
  },
})

export default Button
