import { Rating } from 'react-simple-star-rating';
import { useTheme } from 'styled-components';
import { Container, RatingContainer } from './styles';
import { Tag } from '../Tag';

export function Movie({ data, ...rest}) {
  const themes = useTheme();
  return (
    <Container {...rest}>
       <h1>Interrestellar</h1>


        <RatingContainer>
          <Rating
            ratingValue={0}
            initialValue={3}
            fillColor={themes.colors.violet}
            emptyColor={themes.colors.background_600}
            readonly
            size={24}
            allowHover={false} 
          />
        </RatingContainer>

      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se...
      </p>

      { 
        data.tags && 
        <footer>
          { data.tags.map(tag => <Tag key={tag.id} title={tag.name} /> )}
        </footer>
      }

    </Container>
  );
}
