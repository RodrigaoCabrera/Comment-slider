import "./App.css";

//import de imágenes
import profile from "./assets/profile.png";
import ro from "./assets/ro.png";
import next from "./assets/next.svg";
import prev from "./assets/prev.svg";

//Import de styled component
import styled from "styled-components";

export default function App() {
  return (
    <SliderContainer>
      <SliderChildren>
        <Button>
          <img src={prev} />
        </Button>

        <CardContainer>
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
        </CardContainer>

        <Button>
          <img src={next} />
        </Button>
      </SliderChildren>
    </SliderContainer>
  );
}
const SliderContainer = styled.div`
  background-color: #252835;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const SliderChildren = styled.section`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  max-width: 508px;
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
`;
