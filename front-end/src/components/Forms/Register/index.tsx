import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Link,
} from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { IRegister } from "../../../validations/types"
import { Register } from "../../../validations/auth"
import { IForm } from "../../../pages/Auth"
import { motion } from "framer-motion"

interface IFormRegister {
  setForm: React.Dispatch<React.SetStateAction<IForm>>
}

export const FormRegister = ({ setForm }: IFormRegister) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({ resolver: zodResolver(Register) })

  return (
    <Flex
      as={motion.div}
      flexDir="column"
      gap="2rem"
      w="100%"
      maxW="400px"
      animate={{ rotate: [0, 360] }}
    >
      <Heading>Cadastro</Heading>

      <Flex
        as={"form"}
        onSubmit={handleSubmit(() => {})}
        flexDir="column"
        gap="1rem"
      >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
            variant="filled"
          />
          {errors.email?.message && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
            variant="filled"
          />
          {errors.email?.message && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
            variant="filled"
          />
          {errors.password?.message && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>

        <Button type="submit" variant="solid">
          Cadastrar
        </Button>

        <Text>
          já possui cadastro?{" "}
          <Link color="teal.600" onClick={() => setForm("Login")}>
            login
          </Link>
        </Text>
      </Flex>
    </Flex>
  )
}
