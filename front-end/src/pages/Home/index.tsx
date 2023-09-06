import { Grid } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { Container } from "../../components/Container"
import { CardProduct } from "../../components/CardProduct"
import { useProductContext } from "../../contexts/productContext"

export const Home = () => {
  const { products } = useProductContext()

  return (
    <>
      <Header />
      <Container>
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
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </>
  )
}
