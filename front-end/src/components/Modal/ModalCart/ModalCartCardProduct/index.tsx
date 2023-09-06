import { Card, CardBody, CardFooter } from "@chakra-ui/card"
import { ICartProduct } from "../../../../contexts/types"
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/button"
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons"
import noImg from "../../../../assets/noImg.jpg"

export const ModalCartCardProduct = ({
  cartProduct,
}: {
  cartProduct: ICartProduct
}) => {
  return (
    <Card direction="row" justifyContent="space-between" pos="relative">
      <IconButton
        variant="unstyled"
        aria-label="delete product"
        pos="absolute"
        top="0"
        right="0"
        icon={<DeleteIcon />}
      />

      <Image
        objectFit="cover"
        src={cartProduct.product.imgUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = noImg
        }}
        w="40%"
        alt="product_image"
        borderRadius="md"
      />

      <Stack w="60%">
        <CardBody>
          <Heading size="sm">{cartProduct.product.name}</Heading>
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
            />
            <Text color="teal.600" fontWeight="semibold">
              {cartProduct.amount}
            </Text>
            <IconButton
              variant="unstyled"
              color="teal.600"
              aria-label="add one"
              icon={<AddIcon />}
            />
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  )
}
