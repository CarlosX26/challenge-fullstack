import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  Text,
} from "@chakra-ui/react"
import { useCartContext } from "../../../contexts/cartContext"
import { ModalCartCardProduct } from "./ModalCartCardProduct"

export const ModalCart = () => {
  const { isOpen, onClose, cartList, checkout, loading } = useCartContext()

  const totalCart = cartList.reduce(
    (acc, acv) => acc + acv.amount * acv.product.price,
    0
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Carrinho</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <Flex as={"ul"} flexDir="column" w="100%" gap="16px">
              {cartList.map((cartProduct) => (
                <ModalCartCardProduct
                  key={cartProduct.product.name}
                  cartProduct={cartProduct}
                />
              ))}
            </Flex>

            <Flex flexDir="column" w="100%">
              <Flex>
                <Text fontWeight="bold" w="50%">
                  Total
                </Text>
                <Text fontWeight="bold" w="50%" textAlign="end">
                  {totalCart.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>
              </Flex>
              <Button
                disabled={loading}
                mt="16px"
                type="submit"
                onClick={checkout}
              >
                {!loading && "Finalizar compra"}
                {loading && "Enviando pedido..."}
              </Button>
            </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
