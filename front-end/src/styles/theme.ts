import { extendTheme } from "@chakra-ui/react"
import Button from "./components/button"
import Input from "./components/input"

const theme = extendTheme({
  components: {
    Button,
    Input,
  },
})

export { theme }
