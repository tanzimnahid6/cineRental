import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";

import cart from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CardDetails from "./cine/CardDetails";
import { MovieContext, ThemeContext } from "../context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);

  const { darkMood, setDarkMood } = useContext(ThemeContext);

  return (
    <>
      <header>
        {showCart && (
          <CardDetails onClose={() => setShowCart(false)}></CardDetails>
        )}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="/">
            <img src={Logo} width="139" height="26" alt="Logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="Ring svg" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={()=>setDarkMood(!darkMood)}
              >
                <img
                  src={darkMood ? Sun : Moon}
                  width="24"
                  height="24"
                  alt="Moon"
                />
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowCart(true)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
                href="#"
              >
                <img src={cart} width="24" height="24" alt="shopping cart" />
                {cartData.length > 0 && (
                  <span className="absolute -top-4 -right-2 font-bold text-green-600   rounded-full px-2 py-1">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
