import { defineStyleConfig } from "@chakra-ui/react"

const Input = defineStyleConfig({
  variants: {
    filled: {
      field: {
        _focusVisible: {
          borderColor: "teal.600",
        },
      },
    },
    outline: {
      field: {
        _focusVisible: {
          borderColor: "teal.600",
        },
      },
    },
  },
})

export default Input
