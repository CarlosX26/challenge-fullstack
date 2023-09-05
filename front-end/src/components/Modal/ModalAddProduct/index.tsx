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
import { IProduct } from "../../../validations/types"

export const ModalAddProduct = () => {
  const { isOpen, onClose } = useAdminContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: zodResolver(Product),
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Adicionar produto</ModalHeader>
        <ModalCloseButton />
        <ModalBody as={"form"} onSubmit={handleSubmit(() => {})}>
          <VStack>
            <FormControl>
              <FormLabel>Nome do produto</FormLabel>
              <Input
                type="text"
                placeholder="Digite o nome do produto"
                variant="filled"
                {...register("name")}
              />
              {errors.name?.message && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Descrição</FormLabel>
              <Input
                type="text"
                placeholder="Digite uma descrição(opcional)"
                variant="filled"
                {...register("description")}
              />
              {errors.description?.message && (
                <FormErrorMessage>
                  {errors.description.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Imagem</FormLabel>
              <Input
                type="text"
                placeholder="Url da imagem aqui(opcional)"
                variant="filled"
                {...register("img_url")}
              />
              {errors.img_url?.message && (
                <FormErrorMessage>{errors.img_url.message}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Estoque</FormLabel>
              <Input
                type="number"
                placeholder="Digite a quantidade do produto"
                variant="filled"
                {...register("inventory")}
              />
              {errors.inventory?.message && (
                <FormErrorMessage>{errors.inventory.message}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Preço</FormLabel>
              <Input
                type="number"
                placeholder="Digite o preço do produto"
                variant="filled"
                {...register("price")}
              />

              {errors.price?.message && (
                <FormErrorMessage>{errors.price.message}</FormErrorMessage>
              )}
            </FormControl>

            <Button mt="16px" type="submit">
              Adicionar produto
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
