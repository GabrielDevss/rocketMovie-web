import { Container, Profile } from "./styles";

export function Header({ ...rest }) {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input type="text" placeholder="Pesquisar pelo título" {...rest} />
      <Profile>
        <div>
          <strong>Gabriel Oliveira</strong>
          <a href="#">sair</a>
        </div>
        <img src="https://github.com/gabrieldevss.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
