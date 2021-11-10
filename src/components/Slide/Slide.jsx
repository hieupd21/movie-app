import React, { useEffect, useRef, useState } from "react";
import tmdbApi, { movieType, category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHistory } from "react-router";
import Button, { OutLineButton } from "../Button/Button";
import Modal, { ModalContent } from "../Modal/Modal";
import "./Slide.scss";

// modal
const TrailerModal = ({ item }) => {
  const iframeRef = useRef(null);
  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe ref={iframeRef} width="100%" height="500px" title="title" />
      </ModalContent>
    </Modal>
  );
};

// slide item
const SlideItem = ({ item, className }) => {
  let history = useHistory();
  const bg = apiConfig.originalImage(item.backdrop_path);
  const poster = apiConfig.w500Image(item.poster_path);

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videoSrc = `https://www.youtube.com/embed/${videos.results[0].key}`;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }

    modal.classList.toggle("active");
  };

  return (
    <div
      className={`slide__item ${className}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="slide__item__content container">
        <div className="slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <p className="overview">{item.overview}</p>
          <div className="btns">
            <Button onClick={() => history.push(`/movie/${item.id}`)}>
              Watch now
            </Button>
            <OutLineButton onClick={setModalActive}>
              Watch trailer
            </OutLineButton>
          </div>
        </div>
        <div className="slide__item__content__poster">
          <img src={poster} alt={item.title} />
        </div>
      </div>
    </div>
  );
};

// slide list
export default function Slide() {
  SwiperCore.use([Autoplay]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const params = { page: 1 };
      try {
        const res = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovies(res.results.slice(0, 3));
      } catch (error) {
        console.log("fetch movie error", error);
      }
    };
    fetchMovie();
  }, []);

  return (
    <div className="slide">
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movies.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <SlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movies.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
}
