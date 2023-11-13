// Importa o hook 'useState' do React
import { useState } from 'react';
// Importa o componente 'Container' de um arquivo específico
import { Container } from './styles.js';
// Importa os componentes 'Button', 'Logo' e 'Menu' de diretórios específicos
import { Button } from '../../components/Button/index.jsx';
import { Logo } from '../../components/Logo/index.jsx';
import { Menu } from '../../components/Menu/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';

// Importa a função 'getAudioPath' de um módulo específico
import { getAudioPath } from '../../Modules/getAudioPath.jsx';

// Componente funcional chamado 'Details'
export function Daddy() {
  // Estado local para armazenar as seleções de gênero e necessidade
  const [selectedData, setSelectedData] = useState({ selectedGender: "elu", selectedNeed: "trueLove" });

  // Função de callback chamada quando há uma mudança na seleção
  const handleSelectionChange = (data) => {
    // Atualiza o estado local com as seleções
    setSelectedData(data);
  };

  // Função chamada quando o botão é clicado
  const handleButtonClick = () => {
    // Obtém o caminho do arquivo de áudio com base nas seleções
    const audioPath = getAudioPath(selectedData.selectedGender, selectedData.selectedNeed);
    const phrases = new Audio(audioPath)

    phrases.play()

    // Registra as seleções e o caminho do áudio no console
    console.log('Gênero Selecionado (ao clicar no botão):', selectedData.selectedGender);
    console.log('Necessidade Selecionada (ao clicar no botão):', selectedData.selectedNeed);
    console.log('Caminho do Áudio (ao clicar no botão):', audioPath);
  };

  // Renderiza o componente
  return(
    <Container>
        {/* Renderiza o componente 'Logo' */}
        <Logo />

        {/* Renderiza o componente 'Menu' e passa propriedades e função de callback */}
        <div className="flex">
          <Menu 
            initialGenderProp={selectedData.selectedGender}
            initialNeedProp={selectedData.selectedNeed}
            onSelectionChange={handleSelectionChange}
          />
          <Button onClick={handleButtonClick}/>
        </div>
    </Container>
  );
}
