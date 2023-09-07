import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react"
import { useAdminContext } from "../../../contexts/adminContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Product } from "../../../validations/product"
import { IProductForm } from "../../../validations/types"

export const ModalAddProduct = () => {
  const { isOpen, onClose, createProduct } = useAdminContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductForm>({
    resolver: zodResolver(Product),
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent mx={{ base: "16px", sm: "0" }}>
        <ModalHeader>Adicionar produto</ModalHeader>
        <ModalCloseButton />
        <ModalBody as={"form"} onSubmit={handleSubmit(createProduct)}>
          <VStack>
            <FormControl isInvalid={Boolean(errors.name?.message)}>
              <FormLabel>Nome do produto</FormLabel>
              <Input
                type="text"
                placeholder="Digite o nome do produto"
                variant="filled"
                {...register("name")}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.description?.message)}>
              <FormLabel>Descrição</FormLabel>
              <Input
                type="text"
                placeholder="Digite uma descrição(opcional)"
                variant="filled"
                {...register("description")}
              />
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.imgUrl?.message)}>
              <FormLabel>Imagem</FormLabel>
              <Input
                type="text"
                placeholder="Url da imagem aqui(opcional)"
                variant="filled"
                {...register("imgUrl")}
              />
              <FormErrorMessage>{errors.imgUrl?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.inventory?.message)}>
              <FormLabel>Estoque</FormLabel>
              <Input
                type="number"
                placeholder="Digite a quantidade do produto"
                variant="filled"
                {...register("inventory")}
              />
              <FormErrorMessage>{errors.inventory?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.price?.message)}>
              <FormLabel>Preço</FormLabel>
              <Input
                type="number"
                placeholder="Digite o preço do produto"
                variant="filled"
                {...register("price")}
              />
              <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
            </FormControl>

            <Button w="100%" mt="16px" type="submit">
              Adicionar produto
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
