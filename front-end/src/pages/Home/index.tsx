import { Grid, Heading } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { Container } from "../../components/Container"
import { CardProduct } from "../../components/CardProduct"
import { useProductContext } from "../../contexts/productContext"
import { ModalCart } from "../../components/Modal/ModalCart"

export const Home = () => {
  const { products, filter } = useProductContext()

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
      <Header />
      <Container>
        {filter && (
          <Heading fontSize="lg" pt="32px">
            Resultados encontrados para: {filter}
          </Heading>
        )}
        <Grid
          as={"ul"}
          py="32px"
          templateColumns={{
            base: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap="1rem"
        >
          {filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
      <ModalCart />
    </>
  )
}
