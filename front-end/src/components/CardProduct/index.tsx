import {
  Card,
  CardBody,
  Heading,
  Image,
  VStack,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react"
import macImg from "../../assets/macbook.jpg"

export const CardProduct = () => (
  <Card
    border="1px"
    borderColor="gray.100"
    _hover={{ borderColor: "teal.600" }}
  >
    <CardBody>
      <Image borderRadius="md" src={macImg} alt="product image" />

      <VStack>
        <Heading pt="8px" size="md">
          Living room Sofa
        </Heading>

        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired.
        </Text>
      </VStack>

      <CardFooter
        pt="16px"
        p="0"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text color="teal.600" fontSize="2xl">
          $450
        </Text>
        <Button variant="solid" colorScheme="blue">
          Comprar
        </Button>
      </CardFooter>
    </CardBody>
  </Card>
)
