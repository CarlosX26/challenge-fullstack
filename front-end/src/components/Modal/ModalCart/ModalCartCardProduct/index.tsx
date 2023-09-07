import { Card, CardBody, CardFooter } from "@chakra-ui/card"
import { ICartProduct } from "../../../../contexts/types"
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/button"
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons"
import { useCartContext } from "../../../../contexts/cartContext"
import noImg from "../../../../assets/noImg.jpg"

export const ModalCartCardProduct = ({
  cartProduct,
}: {
  cartProduct: ICartProduct
}) => {
  const { updateProduct, deleteProduct } = useCartContext()

  const incrementProduct = () => {
    if (cartProduct.amount >= cartProduct.product.inventory) {
      return null
    }

    updateProduct(cartProduct.product.id, cartProduct.amount + 1)
  }
  const decrementProduct = () => {
    if (cartProduct.amount === 1) {
      return null
    }
    updateProduct(cartProduct.product.id, cartProduct.amount - 1)
  }

  return (
    <Card direction="row" justifyContent="space-between" pos="relative">
      <IconButton
        variant="unstyled"
        aria-label="delete product"
        pos="absolute"
        top="0"
        right="0"
        icon={<DeleteIcon />}
        onClick={() => deleteProduct(cartProduct.product.id)}
      />

      <Image
        objectFit="cover"
        src={cartProduct.product.imgUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = noImg
        }}
        w="40%"
        h="200px"
        alt="product_image"
        borderRadius="md"
      />

      <Stack w="60%">
        <CardBody>
          <Heading size="sm">{cartProduct.product.name}</Heading>
          <Text color="teal.600" fontSize="sm" pt="16px">
            {(cartProduct.product.price * cartProduct.amount).toLocaleString(
              "pt-BR",
              {
                style: "currency",
                currency: "BRL",
              }
            )}
          </Text>
        </CardBody>

        <CardFooter>
          <Flex
            border="2px"
            borderRadius="md"
            borderColor="teal.600"
            alignItems="center"
          >
            <IconButton
              variant="unstyled"
              aria-label="minus one"
              color="teal.600"
              icon={<MinusIcon />}
              onClick={decrementProduct}
            />
            <Text color="teal.600" fontWeight="semibold">
              {cartProduct.amount}
            </Text>
            <IconButton
              variant="unstyled"
              color="teal.600"
              aria-label="add one"
              icon={<AddIcon />}
              onClick={incrementProduct}
            />
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  )
}
