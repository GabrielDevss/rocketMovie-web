import { useState } from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { api } from '../../services/api';

import { Container, Form, BackgroundImg } from "./styles";

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleRegisterUser() {
    if(!name || !email || !password) {
      alert('Preencha todos os campos!');
    }

    api.post('/users', {name, email, password})
    .then(() => {
      alert('Usuário criado com sucesso!');
      navigate('/');
    }).catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      }else {
        alert('Ops, ocorreu um erro, por favor tente novamente!')
      }
    });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          type="text"
          icon={FiUser}
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          icon={FiMail}
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
          required
        />

        <Button title="Entrar" type="button" onClick={handleRegisterUser} />
        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar para o login
        </Link>
      </Form>

      <BackgroundImg />
    </Container>
  )
}