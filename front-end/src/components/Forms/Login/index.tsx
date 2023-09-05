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

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: zodResolver(Login) })

  return (
    <Flex flexDir="column" gap="2rem" w="100%" maxW="400px">
      <Heading>Login</Heading>

      <Flex
        as={"form"}
        onSubmit={handleSubmit(() => {})}
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
          Não possui cadastro? <Link color="teal.600">cadastre-se</Link>
        </Text>
      </Flex>
    </Flex>
  )
}
