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
} from "@chakra-ui/react"
import { useCartContext } from "../../../contexts/cartContext"
import { ModalCartCardProduct } from "./ModalCartCardProduct"

export const ModalCart = () => {
  const { isOpen, onClose, cartList } = useCartContext()

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

            <Flex>
              <Button mt="16px" type="submit">
                Finalizar compra
              </Button>
            </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
