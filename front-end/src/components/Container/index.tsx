import { Box } from "@chakra-ui/react"

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box maxW="90%" m="0 auto">
      {children}
    </Box>
  )
}
