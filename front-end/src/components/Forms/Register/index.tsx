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
import { useLocation } from "react-router-dom"
import { useAuthContext } from "../../../contexts/authContext"

interface IFormRegister {
  setForm: React.Dispatch<React.SetStateAction<IForm>>
}

export const FormRegister = ({ setForm }: IFormRegister) => {
  const location = useLocation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({ resolver: zodResolver(Register) })
  const { registerUser, registerUserAdm } = useAuthContext()

  const submit = (registerData: IRegister) => {
    const isAdm = location.pathname.includes("adm")

    isAdm ? registerUserAdm(registerData) : registerUser(registerData)

    setForm("Login")
  }

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
        onSubmit={handleSubmit(submit)}
        flexDir="column"
        gap="1rem"
      >
        <FormControl isInvalid={Boolean(errors.name?.message)}>
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
            variant="filled"
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.email?.message)}>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
            variant="filled"
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.password?.message)}>
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
            variant="filled"
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
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
