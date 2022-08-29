import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { Container, Content } from './styles';

export function Home() {
  const navigate = useNavigate();

  function handleAddNewMovie() {
    navigate('/new');
  }

  return (
    <Container>
      <Header />

      <main>
         <div>
          <h1>Meus filmes</h1>
          <Button
            type="button"
            title="Adicionar filme"
            icon={FiPlus}
            onClick={handleAddNewMovie}
          />
         </div>
        <Content>
          <Movie
            data={{
             tags: [
              {id: '1', name: 'Ficção Cientifica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
             ]
            }}
          />
        </Content>
      </main>
    </Container>
  )
}

