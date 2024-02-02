/* eslint-disable react/prop-types */

import { useContext } from "react";
import { MovieContext, ThemeContext } from "../../context";
import Delete from "../../assets/delete.svg";
import Checkout from "../../assets/icons/checkout.svg";
import { getImgUrl } from "../../util/cine-util";
import { toast } from "react-toastify";

const CardDetails = ({ onClose }) => {
  const { cartData, setCartData } = useContext(MovieContext);
  const { darkMood } = useContext(ThemeContext);
  console.log(cartData);
  const handleRemoveCart = (e, id) => {
    e.preventDefault();
    const filteredItems = cartData.filter((item) => item.id !== id);
    setCartData([...filteredItems]);
    toast.error(`Movie  remove successfully`);
  };
  return (
    <>
      <>
        {/* Cart */}
        <div className="fixed top-0 left-0 w-screen h-screen z-50  backdrop-blur-sm ">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
            <div
              className={`${
                darkMood ? "dark" : "bg-black text-white"
              } shadow-md  rounded-2xl overflow-hidden p-5 md:p-9`}
            >
              <h2 className="text-2xl lg:text-[30px] mb-10 font-bold ">
                Your Carts
              </h2>
              <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
                {cartData.length > 0 ? (
                  cartData.map((movie) => (
                    <div
                      key={movie.id}
                      className="grid grid-cols-[1fr_auto] gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          className="rounded overflow-hidden w-16 h-20 object-cover"
                          src={getImgUrl(movie.cover)}
                          alt="movie cover"
                        />
                        <div>
                          <h3 className="text-base md:text-xl font-bold">
                            {movie.title}
                          </h3>
                          <p className="max-md:text-xs text-[#575A6E]">
                            {movie.genre}
                          </p>
                          <span className="max-md:text-xs">${movie.price}</span>
                        </div>
                      </div>
                      <div className="flex justify-between gap-4 items-center">
                        <button
                          onClick={(e) => handleRemoveCart(e, movie.id)}
                          className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                        >
                          <img className="w-5 h-5" src={Delete} alt="" />
                          <span className="max-md:hidden">Remove</span>
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="font-bold text-green-500 text-center text-2xl">
                    There is no movie added to cart
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end gap-2">
                {cartData.length > 0 ? (
                  <a
                    className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
                    href="#"
                  >
                    <img src={Checkout} width={24} height={24} alt="" />
                    <span>Checkout</span>
                  </a>
                ) : (
                  <a
                    className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
                    href="#"
                  >
                    
                    <span>Add Movie</span>
                  </a>
                )}

                <a
                  className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] d font-semibold text-sm"
                  href="#"
                  onClick={onClose}
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Cart */}
      </>
    </>
  );
};

export default CardDetails;
