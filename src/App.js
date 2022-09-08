import "./App.css";

//Import de hooks
import { useRef, useEffect, useState } from "react";

//import de imágenes
import next from "./assets/next.svg";
import prev from "./assets/prev.svg";

//Import de styled component
import styled from "styled-components";
import Cards from "./components/CardContainer";
import SlideButton from "./components/SlideButton";
import Pagination from "./components/Pagination";

export default function App() {
  const sliderContainer = useRef(null);
  const sliderInterval = useRef(null);

  const [totalItems, setTotalItems] = useState(null);
  const [slides, setSlides] = useState(null);
  useEffect(() => {
    setSlides(sliderContainer.current);
    setTotalItems(sliderContainer.current.children.length);
    //Declaramos un intervalo que cada 4 segundos pasa al siguiente slide.
    /* let slideAutomatic;
    slideAutomatic = setInterval(() => {
      totalItems !== null && nextSlide();
    }, 3000);

    let SliderContainer = sliderInterval.current;
    //Detenemos el slide automático, eliminando el intervalo al pasar el mouse sobre el slider.
    SliderContainer.addEventListener("mouseenter", () => {
      clearInterval(slideAutomatic);
    });

    //Activamos nuevamente el slide automático al quitar el puntero del slider.
    SliderContainer.addEventListener("mouseleave", () => {
      slideAutomatic = setInterval(() => {
        nextSlide();
      }, 3000);
    }); */
  }, [totalItems]);

  const nextSlide = () => {
    //Leemos el tamaño de los slide
    const slideSize = slides?.children[0].offsetWidth;
    //Primer elemento del array de slides
    const firstElement = [slides?.children[0]];
    handleSlides(slideSize, firstElement, "next");
  };

  const handleSlides = (slideSize, elements, actionType, itemNumber) => {
    //Accionamos solo si hay slide.
    if (totalItems > 0) {
      //Agregamos transition al contenedor de slide.
      slides.style.transition = "300ms ease-out all";

      if (actionType === "next") {
        //Movemos los slide
        slides.style.transform = `translateX(-${slideSize}px)`;

        //quitamos el translate y transition y movemos el primer slide al último lugar
        const removeTransition = () => {
          slides.style.transition = "none";
          slides.style.transform = "translateX(0)";

          //Agregamos el primer slide al final del array de slide.
          elements.forEach((e) => {
            slides.appendChild(e);
          });

          //Removemos el evento que está pendiente de la finalización de la transition.
          slides.removeEventListener("transitionend", removeTransition);
        };

        //Agregamos un evento que está pendiente de la finalización de la transition.
        slides.addEventListener("transitionend", removeTransition);

        //Establecemos el index actual del slide
        setCurrentCardIndex((prev) => {
          return prev >= totalItems - 1
            ? 0
            : itemNumber || prev + elements.length;
        });
      }
      if (actionType === "prev") {
        //Agregamos el/los elementos slide al inicio del array de slide.
        //Insetamos el último slide antes del primero.
        elements.forEach((e, i) => {
          slides.insertBefore(elements.at(-(i + 1)), slides.firstChild);
          //console.log([...slides.children].at(-(i+1)))
        });
        //Quitamos la transition al container del slides y los movemos a la izquierda en px el tamaño de los slide.
        slides.style.transition = "none";
        slides.style.transform = `translateX(-${slideSize}px)`;

        //Establecemos un tiempo en el cual se agregan transition al contenedor de slides y lo movemos a la ubicacion 0 del eje x para que se visualice
        setTimeout(() => {
          slides.style.transition = "300ms ease-out all";
          slides.style.transform = `translateX(0)`;
        }, 30);

        //Establecemos el index actual del slide
        setCurrentCardIndex((prev) => {
          return prev <= 0
            ? totalItems - 1
            : itemNumber || prev - elements.length;
        });
      }
    }
  };

  const prevSlide = () => {
    if (totalItems > 0) {
      //Obtenemos el último índice del array de slide.
      const lastIndex = slides.children.length - 1;
      //Obtenemos el último slide.
      const lastElement = [slides.children[lastIndex]];

      //Leemos el tamaño de los slide
      const slideSize = slides.children[0].offsetWidth;

      handleSlides(slideSize, lastElement, "prev");
    }
  };

  //Guardamos el index del item o card actual
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const goToItem = (itemNumber) => {
    if (currentCardIndex !== itemNumber) {
      const itemList = [...slides.children];
      let slidesTotal =
        currentCardIndex > itemNumber
          ? itemList.slice(-(currentCardIndex - itemNumber))
          : itemList.slice(0, Math.abs(currentCardIndex - itemNumber));

      //Establecemos el tamaño de los slides a recorrer para llegar al item o card solicitada.
      const slideSize = slidesTotal?.reduce((acc, curr) => {
        return acc + curr?.offsetWidth;
      }, 0);
      if (itemNumber > currentCardIndex) {
        return handleSlides(slideSize, slidesTotal, "next", itemNumber);
      } else {
        //Obtenemos el último índice del array de slide.
        const lastIndex = slides.children.length - 1;
        return handleSlides(slideSize, slidesTotal, "prev", itemNumber);
      }
    }
    return;
  };

  return (
    <SliderMain>
      <SliderContainer ref={sliderInterval}>
        <SlideButton action={prevSlide} image={prev} />

        <SliderChildren>
          <Cards sliderContainer={sliderContainer} />
        </SliderChildren>

        <SlideButton action={nextSlide} image={next} />

        <Pagination totalItems={totalItems} currentCardIndex={currentCardIndex} goToItem={goToItem} />
      </SliderContainer>
    </SliderMain>
  );
}
const SliderMain = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #252835;
`;
const SliderContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  position: relative;
`;

const SliderChildren = styled.section`
  display: flex;
  align-items: center;
  overflow: hidden;
  max-width: 508px;
`;
