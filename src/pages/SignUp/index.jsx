import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, BackgroundImg } from "./styles";

export function SignUp() {
  return(
    <Container>
      <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Crie sua conta</h2>

        <Input icon={FiUser} placeholder="Nome" />
        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha" />

        <Button title="Entrar" />
          <Link to="/">
            <FiArrowLeft size={20}/>
            Voltar para o login
          </Link>
      </Form>

    <BackgroundImg />
    </Container>
  )
}