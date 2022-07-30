
import { ButtonStar } from '../ButtonStar';
import { Tag } from '../Tag';

import { Container } from './styles';

export function Movie({ data, ...rest}) {
  return (
    <Container {...rest}>
       <h1>Interrestellar</h1>

      <ButtonStar />

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
