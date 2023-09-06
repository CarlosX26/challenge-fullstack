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
  Select,
  VStack,
} from "@chakra-ui/react"
import { useAdminContext } from "../../../contexts/adminContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Product } from "../../../validations/product"
import { IProductForm } from "../../../validations/types"
import { ChangeEvent } from "react"

export const ModalEditProduct = () => {
  const {
    isOpen,
    onClose,
    adminProducts,
    updateProduct,
    currentProduct,
    handleProduct,
  } = useAdminContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IProductForm>({
    resolver: zodResolver(Product),
    defaultValues: { ...currentProduct },
  })

  const changeProduct = (e: ChangeEvent<HTMLSelectElement>) => {
    handleProduct(e.target.value)

    setValue("name", currentProduct!.name)
    setValue("description", currentProduct!.description)
    setValue("imgUrl", currentProduct!.imgUrl)
    setValue("inventory", currentProduct!.inventory)
    setValue("price", currentProduct!.price)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent mx={{ base: "16px", sm: "0" }}>
        <ModalHeader>Editar produto</ModalHeader>
        <ModalCloseButton />
        <ModalBody as={"form"} onSubmit={handleSubmit(updateProduct)}>
          <VStack>
            <Select onChange={changeProduct}>
              <option>Selecione um produto</option>
              {adminProducts.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </Select>
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
                {...register("imgUrl")}
              />
              {errors.imgUrl?.message && (
                <FormErrorMessage>{errors.imgUrl?.message}</FormErrorMessage>
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

            <Button w="100%" mt="16px" type="submit">
              Atualizar produto
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
