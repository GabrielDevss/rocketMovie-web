import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from '../../hooks/auth'

import { Container, Form, BackgroundImg } from "./styles";

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 async function handleSignIn() {  
  signIn({email, password});
 }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          type="email"
          icon={FiMail}
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />

        <Button type="button" title="Entrar" onClick={handleSignIn} />
        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <BackgroundImg />
    </Container>
  )
}