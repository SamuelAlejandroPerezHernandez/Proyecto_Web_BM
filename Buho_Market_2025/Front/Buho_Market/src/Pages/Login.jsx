import styled from "styled-components";
import { UserAuth } from "../context/AuthContext";

export default function Login() {
  const { signInWithGoogle } = UserAuth();

  return (
    <Container>
      <GoogleBtn onClick={signInWithGoogle} aria-label="Iniciar sesión con Google">
        Iniciar con Google
      </GoogleBtn>
    </Container>
  );
}

/*david esto es css prototipo*/

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #242424;
`;

const GoogleBtn = styled.button`
  padding: 12px 20px;
  border-radius: 10px;
  border: 0;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  background: #1a73e8;
  transition: filter .15s ease;
  &:hover { filter: brightness(1.05); }
`;