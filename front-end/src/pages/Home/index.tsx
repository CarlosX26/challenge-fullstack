import { Grid } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { Container } from "../../components/Container"
import { CardProduct } from "../../components/CardProduct"

export const Home = () => {
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
          {[1, 3, 0, 2, 88, 87].map((n) => (
            <CardProduct key={n} />
          ))}
        </Grid>
      </Container>
    </>
  )
}
