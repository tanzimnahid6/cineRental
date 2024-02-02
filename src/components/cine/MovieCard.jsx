/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getImgUrl } from "../../util/cine-util";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../../context";
import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const { setCartData, cartData } = useContext(MovieContext);

  const manageModal = () => {
    setSelected(null), setShowModal(false);
  };
  const handleMovieSelection = (m) => {
    setSelected(m);
    setShowModal(true);
  };

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    const isExist = cartData.find((item) => item.id === movie.id);
    if (!isExist) {
      setCartData([...cartData, movie]);
      toast.success(`Movie  ${movie.title} added successfully`);
    } else {
    
      toast.error(`Movie  ${movie.title} already exits to cart`);
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          manageModal={manageModal}
          movie={selected}
          handleAddToCart={handleAddToCart}
        ></MovieDetailsModal>
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <div onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt="title"
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex gap-2 my-2">
              <Rating value={movie.rating}></Rating>
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default MovieCard;
