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
import { Login } from "../../../validations/auth"
import { ILogin } from "../../../validations/types"
import { IForm } from "../../../pages/Auth"
import { motion } from "framer-motion"
import { useAuthContext } from "../../../contexts/authContext"
import { useLocation } from "react-router-dom"

interface IFormLogin {
  setForm: React.Dispatch<React.SetStateAction<IForm>>
}

export const FormLogin = ({ setForm }: IFormLogin) => {
  const location = useLocation()
  const { loginUser, loginUserAdm } = useAuthContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: zodResolver(Login) })
  const submit = (loginData: ILogin) => {
    const isAdm = location.pathname.includes("adm")

    isAdm ? loginUserAdm(loginData) : loginUser(loginData)
  }

  return (
    <Flex
      as={motion.div}
      flexDir="column"
      gap="2rem"
      w="100%"
      maxW="400px"
      animate={{ rotate: [180, 0] }}
    >
      <Heading>Login</Heading>

      <Flex
        as={"form"}
        onSubmit={handleSubmit(submit)}
        flexDir="column"
        gap="1rem"
      >
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
          Login
        </Button>

        <Text>
          Não possui cadastro?{" "}
          <Link color="teal.600" onClick={() => setForm("Register")}>
            cadastre-se
          </Link>
        </Text>
      </Flex>
    </Flex>
  )
}
