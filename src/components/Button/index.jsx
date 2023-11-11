import { useState } from 'react';
import { Container } from './styles';

import btnNormal from '../../assets/btnNormal.webp';
import btnPressed from '../../assets/btnPressed.webp';

// Declaração do componente Button que aceita propriedades (props)
export function Button(props) {
  // Cria um estado local usando o hook useState. isMouseDown é o valor do estado, setMouseDown é a função para atualizá-lo.
  const [isMouseDown, setMouseDown] = useState(false);

  // Renderiza o componente Container. onMouseDown e onMouseUp são eventos de mouse que alteram o estado isMouseDown.
  return (
    <Container
      type="button"
      // Quando o mouse é pressionado, a função arrow é chamada, definindo isMouseDown como true.
      onMouseDown={() => setMouseDown(true)}
      // Quando o mouse é liberado, a função arrow é chamada, definindo isMouseDown como false.
      onMouseUp={() => setMouseDown(false)}
      // Repassa todas as outras propriedades (props) que podem ter sido passadas para este componente.
      {...props}
    >
      {/* Renderiza uma imagem. Se isMouseDown for verdadeiro, exibe a imagem btnPressed, caso contrário, exibe a imagem btnNormal. */}
      <img src={isMouseDown ? btnPressed : btnNormal} alt="Button Image" />
    </Container>
  );
}
