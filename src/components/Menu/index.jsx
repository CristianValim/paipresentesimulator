// Importando os hooks 'useState' e 'useEffect' do React
import { useState, useEffect } from 'react';
// Importando o componente 'Container' de um arquivo localizado em './styles.js'
import { Container } from './styles.js';

// Importando os componentes 'Radio' e 'GenderSelect' de arquivos específicos
import { Radio } from '../Radio/index.jsx';
import { GenderSelect } from '../Select/index.jsx';
// Importando a função 'getAudioPath' de um módulo localizado em '../../Modules/getAudioPath.jsx'
import { getAudioPath } from '../../Modules/getAudioPath.jsx';

// Definindo um componente funcional chamado 'Menu' que recebe propriedades (initialGenderProp, initialNeedProp, onSelectionChange)
export function Menu({ initialGenderProp, initialNeedProp, onSelectionChange }) {
  // Definindo estados locais para o gênero e necessidade selecionados
  const [selectedGender, setSelectedGender] = useState(initialGenderProp || '');
  const [selectedNeed, setSelectedNeed] = useState(initialNeedProp || '');

  // Função chamada quando o gênero é alterado
  const handleGenderChange = (event) => {
    const option = event.target.value; // Extrai o valor do gênero do evento
    const audioPath = getAudioPath(option, selectedNeed);
    setSelectedGender(option);
    // Chama a função fornecida através de 'onSelectionChange' com os parâmetros atualizados
    onSelectionChange({ selectedGender: option, selectedNeed, audioPath });
  };

  // Função chamada quando a necessidade é alterada
  const handleNeedsChange = (event) => {
    const value = event.target.value; // Certifique-se de que está usando event.target.value
    const audioPath = getAudioPath(selectedGender, value);
    setSelectedNeed(value);
    // Chama a função fornecida através de 'onSelectionChange' com os parâmetros atualizados
    onSelectionChange({ selectedGender, selectedNeed: value, audioPath });
  };

  // Efeito que reseta os estados locais quando as propriedades iniciais são alteradas
  useEffect(() => {
    setSelectedGender(initialGenderProp || '');
    setSelectedNeed(initialNeedProp || '');
  }, [initialGenderProp, initialNeedProp]);

  // Opções disponíveis para as necessidades
  const needsOptions = [
    { id: 'trueLove', value: 'trueLove', label: 'Amor e apoio incondicional' },
    { id: 'sexuality', value: 'sexuality', label: 'Aceitação de sexualidade' },
    { id: 'art', value: 'art', label: 'Reconhecimento da sua carreira artística' },
    { id: 'lifeChoices', value: 'lifeChoices', label: 'Aprovação de estilo de vida alternativo' },
  ];

  // Renderização do componente
  return (
    <Container>
      {/* Componente 'GenderSelect' com propriedades e função de callback para alteração de gênero */}
      <GenderSelect 
        selectedGender={selectedGender}
        onGenderChange={handleGenderChange} />

      {/* Componente 'Radio' com propriedades e função de callback para alteração de necessidade */}
      <Radio
        options={needsOptions}
        selectedValue={selectedNeed}
        onChange={handleNeedsChange}
        name="menuInputs"
      />
    </Container>
  );
}
