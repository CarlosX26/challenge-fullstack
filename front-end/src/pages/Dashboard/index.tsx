import { Heading } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { Container } from "../../components/Container"
import { ModalAddProduct } from "../../components/Modal/ModalAddProduct"
import { DashboardOptions } from "../../components/DashboardOptions"
import { ModalEditProduct } from "../../components/Modal/ModalEditProduct"
import { useAdminContext } from "../../contexts/adminContext"
import { ModalDeleteProduct } from "../../components/Modal/ModalDeleteProduct"

export const Dashboard = () => {
  const { modal } = useAdminContext()

  const modals: {
    [key: string]: JSX.Element
  } = {
    addProduct: <ModalAddProduct />,
    editProduct: <ModalEditProduct />,
    deleteProduct: <ModalDeleteProduct />,
  }

  return (
    <>
      <Header />
      <Container>
        <Heading py="32px">Controle</Heading>
        <DashboardOptions />
      </Container>

      {modals[modal]}
    </>
  )
}
