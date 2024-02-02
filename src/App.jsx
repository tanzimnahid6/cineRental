import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/cine/MoviList";
import { MovieContext, ThemeContext } from "./context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);

  const data = {
    cartData,
    setCartData,
  };
  return (
    <>
      <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
        <MovieContext.Provider value={data}>
          <div className={`${darkMood ? "dark" : ""} h-full w-full`}>
            <Header></Header>
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar></Sidebar>
                <MovieList></MovieList>
              </div>
            </main>
            <Footer></Footer>
            <ToastContainer
              position="bottom-left"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
