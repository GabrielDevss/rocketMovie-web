import { FiPlus } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { Container, Content } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <main>
         <div>
          <h1>Meus filmes</h1>
          <Button
            title="Adicionar filme"
            icon={FiPlus}
          />
         </div>
        <Content>
          <Movie
            data={{
             tags: [
              {id: '1', name: 'Ficção Cientifica'},
              {id: '2', name: 'Drama'},
              {id: '1', name: 'Família'}
             ]
            }}
          />

          <Movie
            data={{
             tags: [
              {id: '1', name: 'Ficção Cientifica'},
              {id: '2', name: 'Drama'},
              {id: '1', name: 'Família'}
             ]
            }}
          />

<Movie
            data={{
             tags: [
              {id: '1', name: 'Ficção Cientifica'},
              {id: '2', name: 'Drama'},
              {id: '1', name: 'Família'}
             ]
            }}
          />

<Movie
            data={{
             tags: [
              {id: '1', name: 'Ficção Cientifica'},
              {id: '2', name: 'Drama'},
              {id: '1', name: 'Família'}
             ]
            }}
          />

<Movie
            data={{
             tags: [
              {id: '1', name: 'Ficção Cientifica'},
              {id: '2', name: 'Drama'},
              {id: '1', name: 'Família'}
             ]
            }}
          />

<Movie
            data={{
             tags: [
              {id: '1', name: 'Ficção Cientifica'},
              {id: '2', name: 'Drama'},
              {id: '1', name: 'Família'}
             ]
            }}
          />

        </Content>
      </main>
    </Container>
  )
}

