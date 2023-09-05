import { Heading } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { Container } from "../../components/Container"
import { ModalAddProduct } from "../../components/Modal/ModalAddProduct"
import { DashboardOptions } from "../../components/DashboardOptions"

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <Heading py="32px">Controle</Heading>
        <DashboardOptions />
      </Container>
      <ModalAddProduct />
    </>
  )
}
