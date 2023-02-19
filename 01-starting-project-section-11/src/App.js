import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart.jsx";
import CartProvider from "./components/store/Cart-provider";
import { useState } from "react";

function App() {
  const [displayCart, setDisplayCart] = useState(false);

  const cartDisplayOn = () => {
    setDisplayCart(true);
  };
  const cartDisplayOff = () => {
    setDisplayCart(false);
  };

  return (
    <CartProvider>
      {displayCart && <Cart onCart={cartDisplayOff} />}
      <Header onCart={cartDisplayOn} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
