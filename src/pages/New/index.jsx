import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { useNavigate } from 'react-router-dom';

import { ButtonText } from '../../components/ButtonText';
import { MovieItem } from '../../components/MovieItem';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { Container, Content } from './styles';
import { useTheme } from 'styled-components';

export function New() {
  const themes = useTheme();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState('');

  function handleSubmitForm(event) {
    event.preventDefault();
    if(!title) {
     return alert('Por favor preencha o campo título.')
    }

    if(newTags) {
      return alert("Você deixou um tag no campo para adicionar, clique no botão '+' para adicionar o tag ou apague o conteúdo")
    }

    api.post('/movieNotes', {title, rating, description, tags})
    .then(() => {
      alert('Nota cadastrada com sucesso.');
      navigate('/');
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      }else {
        alert('Não foi possível cadastrar essa nota, tente novamente');
      }
    })
  }

  function handleAddTags() {
    setTags(state => [...state, newTags]);
    setNewTags('');
  }

  function handleRemoveTag(deleted) {
    setMovieTags(state => state.filter(movieTags => movieTags !== deleted));
  }

  function handleRating(number) {
    setRating(number);
  }

  return (
    <Container>
      <Header />

      <main>
        <ButtonText />
        <Content>
          <h1>Novo filme</h1>
          <div className="inputs">
            <Input
              type="text"
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}

            />
            <Rating
              ratingValue={rating}
              size={60}
              fillColor={themes.colors.violet}
              emptyColor={themes.colors.background_900}
              onClick={handleRating}
            />
          </div>
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <footer>
            <h2>Marcadores</h2>
            <div className="tags">
              {tags.map((tag, index) => (
                <MovieItem 
                key={String(index)} 
                value={tag} 
                onClick={() => handleRemoveTag(tag)} 
                />
              ))}
              <MovieItem 
                isNew 
                value={newTags}
                placeholder="Novo marcador"
                onChange={e => setNewTags(e.target.value)}
                onClick={handleAddTags}
               />
            </div>
            <div className="buttons">
              <Button
                type="submit"
                title="Salvar informações"
                onClick={handleSubmitForm}
              />
            </div>
          </footer>
        </Content>
      </main>
    </Container>
  )
}