import { Container, Content } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { MovieItem } from '../../components/MovieItem';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';


export function New() {
  return(
    <Container>
      <Header />

      <main>
        <ButtonText />
        <Content>
          <h1>Novo filme</h1>
          <div className="inputs">
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações" />

          <footer>
            <h2>Marcadores</h2>
              <div className="tags">
                <MovieItem value="Drama" />
                <MovieItem isNew placeholder="Novo marcador"/>
              </div>
            <div className="buttons">
              <Button title="Excluir filme" />
              <Button title="Salvar alterações" />
            </div>
          </footer>
        </Content>
      </main>
    </Container>
  )
}