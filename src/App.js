// import logo from "./logo.svg";
import "./App.css";
import { Flex, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import { createContext, useState } from "react";
import { CartContext } from "./Context";

function App() {

 

  const [cartCount, setCartCount] = useState(0)

  const [cartItem, setCartItem] = useState([])

  return (
    <CartContext.Provider value={{cartCount, setCartCount, cartItem, setCartItem}}>
    <Box width="100%">
    <Flex direction="column" width="100%" justifyContent="center" alignItems="center">
      <Header />
      <ProductPage />
    </Flex>
    </Box>
    </CartContext.Provider>
  );
}

export default App;
