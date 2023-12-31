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
import { IProduct } from "../../contexts/types"
import { useCartContext } from "../../contexts/cartContext"
import noImg from "../../assets/noImg.jpg"

export const CardProduct = ({ product }: { product: IProduct }) => {
  const { addProduct } = useCartContext()

  return (
    <Card
      border="1px"
      borderColor="gray.100"
      _hover={{ borderColor: "teal.600" }}
    >
      <CardBody>
        <Image
          borderRadius="md"
          src={product.imgUrl}
          alt="product image"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src = noImg
          }}
          objectFit="cover"
          h="200px"
          w="100%"
        />

        <VStack>
          <Heading pt="8px" size="sm">
            {product.name}
          </Heading>

          <Text>{product.description}</Text>
        </VStack>

        <CardFooter
          pt="16px"
          p="0"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Text color="teal.600" fontSize="lg">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
          <Button
            onClick={() => addProduct(product.id)}
            variant="solid"
            colorScheme="blue"
          >
            Comprar
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  )
}
