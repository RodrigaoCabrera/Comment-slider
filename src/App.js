import "./App.css";

//Import de hooks
import { useRef } from "react";

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

  const nextSlide = () => {
    //Array de slide
    const slides = sliderContainer.current;

    //Primer elemento del array de slides
    const firstElement = slides.children[0];
    if (slides.children.length > 0) {
      sliderContainer.current.style.transition = "3000ms ease-out all";

      //Leemos el tamaño de los slide
      const slideSize = slides.children[0].offsetWidth
      //Movemos los slide
      sliderContainer.current.style.transform = `translateX(-${slideSize}px)`;

      //quitamos el translate y transition y movemos el primer slide al último lugar 
      const  removeTransition = () => {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';

        slides.appendChild(firstElement);
      }

      slides.addEventListener('transitionend', removeTransition);
    }
  };
  return (
    <SliderContainer>
      <Button>
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
`;

const CommentContainer = styled.div`
  padding: 1rem;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
