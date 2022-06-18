import "./App.css";

//Import de hooks
import { useRef, useEffect } from "react";

//import de imágenes
import profile from "./assets/profile.png";
import ro from "./assets/ro.png";
import gl from "./assets/gl.jpg";
import next from "./assets/next.svg";
import prev from "./assets/prev.svg";

//Import de styled component
import styled from "styled-components";

export default function App() {
  const sliderContainer = useRef(null);

  //Array de slide
  let slides;
  useEffect(() => {
    slides = sliderContainer.current;
  }, []);

  const nextSlide = () => {
    //Primer elemento del array de slides
    const firstElement = slides.children[0];

    //Accionamos solo si hay slide.
    if (slides.children.length > 0) {

      //Agregamos transition al contenedor de slide.
      slides.style.transition = "300ms ease-out all";

      //Leemos el tamaño de los slide
      const slideSize = slides.children[0].offsetWidth;
      //Movemos los slide
      slides.style.transform = `translateX(-${slideSize}px)`;

      //quitamos el translate y transition y movemos el primer slide al último lugar
      const removeTransition = () => {
        slides.style.transition = "none";
        slides.style.transform = "translateX(0)";

        //Agregamos el primer slide al final del array de slide.
        slides.appendChild(firstElement);

        //Removemos el evento que está pendiente de la finalización de la transition.
        slides.removeEventListener("transitionend", removeTransition);
      };
      
      //Agregamos un evento que está pendiente de la finalización de la transition.
      slides.addEventListener("transitionend", removeTransition);

    }
  };

  const prevSlide = () => {
    if (slides.children.length > 0) {
      //Obtenemos el último índice del array de slide.
      const lastIndex = slides.children.length - 1;
      //Obtenemos el último slide.
      const lastElement = slides.children[lastIndex];
      //Insetamos el último slide antes del primero.
      slides.insertBefore(lastElement, slides.firstChild);

      //Leemos el tamaño de los slide
      const slideSize = slides.children[0].offsetWidth; 

      //Quitamos la transition al container del slides y los movemos a la izquierda en px el tamaño de los slide.
      sliderContainer.current.style.transition = 'none';
      sliderContainer.current.style.transform = `translateX(-${slideSize}px)`;

      //Establecemos un tiempo en el cual se agregan transition al contenedor de slides y lo movemos a la ubicacion 0 del eje x para que se visualice
      setTimeout(() => {
        sliderContainer.current.style.transition = '300ms ease-out all';
        sliderContainer.current.style.transform = `translateX(0)`;
      }, 30)

    }
  };
  return (
    <SliderContainer>
      <Button onClick={prevSlide}>
        <img src={prev} />
      </Button>
      <SliderChildren>
        <CardContainer ref={sliderContainer}>
          <Card>
            <Profile>
              <ProfileImg src={ro} alt="foto de perfil" />
              <h1>Jhon Doe</h1>
            </Profile>
            <CommentContainer>
              <p>
                Me pareció excelente, creo que el Discord está muy bien
                organizado y la iniciativa de NUWE es tremenda, gracias por la
                oportunidad, realmente lo disfruté.
              </p>
            </CommentContainer>
          </Card>
          <Card>
            <Profile>
              <img src={profile} alt="foto de perfil" />
              <h1>Jhon Doe</h1>
            </Profile>
            <CommentContainer>
              <p>
                Me pareció excelente, creo que el Discord está muy bien
                organizado y la iniciativa de NUWE es tremenda, gracias por la
                oportunidad, realmente lo disfruté.
              </p>
            </CommentContainer>
          </Card>
          <Card>
            <Profile>
              <ProfileImg src={gl} alt="foto de perfil" />
              <h1>Jhon Doe</h1>
            </Profile>
            <CommentContainer>
              <p>
                Me pareció excelente, creo que el Discord está muy bien
                organizado y la iniciativa de NUWE es tremenda, gracias por la
                oportunidad, realmente lo disfruté.
              </p>
            </CommentContainer>
          </Card>
        </CardContainer>
      </SliderChildren>
      <Button onClick={nextSlide}>
        <img src={next} />
      </Button>
    </SliderContainer>
  );
}
const SliderContainer = styled.div`
  background-color: #252835;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const SliderChildren = styled.section`
  display: flex;
  align-items: center;
  overflow: hidden;
  max-width: 508px;
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Card = styled.section`
  min-width: 100%;
  height: 258.58px;
  background: #252835;
  border: 2px solid #2e353f;
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Button = styled.button`
  width: 34px;
  height: 36px;
  background: #1e212e;
  border: 1px solid #39424e;
  border-radius: 5px;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  color: #fff;
`;

const CommentContainer = styled.div`
  padding: 1rem;
  color: #fff;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
