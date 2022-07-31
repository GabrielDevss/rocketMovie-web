import { FiUser, FiMail, FiLock, FiCamera  } from 'react-icons/fi';

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form, Avatar } from './styles';

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText />
      </header>

      <Form>

        <Avatar>
          <img src="https://github.com/gabrieldevss.png" alt="" />

        <label htmlFor="avatar">
        <FiCamera />
          <input id="avatar" type="file" />
        </label>
        </Avatar>

        <Input icon={FiUser} type="text" placeholder="Nome" />
        <Input icon={FiMail} type="email" placeholder="E-mail" />
        <Input icon={FiLock} type="password" placeholder="Senha atual" />
        <Input icon={FiLock} type="password" placeholder="Nova Senha" />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
