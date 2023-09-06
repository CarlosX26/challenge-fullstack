import {
  Avatar,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Button,
} from "@chakra-ui/react"
import { Logo } from "../Logo"
import { Link, useLocation } from "react-router-dom"
import { useAuthContext } from "../../contexts/authContext"
import { SearchIcon } from "@chakra-ui/icons"
import cartIcon from "../../assets/shoppingCart.svg"
import { useCartContext } from "../../contexts/cartContext"

export const Header = () => {
  const location = useLocation()

  const { user, logout } = useAuthContext()

  const { onOpen } = useCartContext()

  const isAdm = location.pathname.includes("adm")

  return (
    <Flex as={"header"} w="100%" borderBottom="2px" borderColor="teal.600">
      <Flex
        w="90%"
        maxW="90%"
        m="0 auto"
        alignItems="center"
        justifyContent="space-between"
        minH="72px"
      >
        <Logo />

        <Flex alignItems="center" gap="16px">
          {!isAdm && (
            <Flex gap="16px" alignItems="center">
              <Button variant="unstyled" onClick={onOpen}>
                <Image
                  m="0 auto"
                  w="32px"
                  h="32px"
                  src={cartIcon}
                  alt="cart_icon"
                />
              </Button>

              <Input
                type="text"
                placeholder="Pesquise um item"
                variant="filled"
              />
              <IconButton aria-label="Search product" icon={<SearchIcon />} />
            </Flex>
          )}

          {user && (
            <Menu>
              <MenuButton>
                <Avatar name={user?.name} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={logout}>Sair</MenuItem>
              </MenuList>
            </Menu>
          )}
          {!user && <Link to="/auth">Login</Link>}
        </Flex>
      </Flex>
    </Flex>
  )
}
