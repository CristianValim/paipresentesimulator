// Importando o componente 'Container' de um arquivo localizado em './styles'
import { Container } from './styles';

// Definindo um componente funcional chamado 'Radio' que recebe as propriedades (options, selectedValue, onChange, name)
export function Radio({ options, selectedValue, onChange, name }) {
  // Retornando JSX que representa um grupo de botões de rádio
  return (
    <>
      {/* Título indicando a finalidade dos botões de rádio */}
      <h2>Qual sua necessidade?</h2>

      {/* Mapeando o array 'options' para criar um conjunto de botões de rádio */}
      {options.map(option => (
        // Utilizando o componente 'Container' importado e fornecendo uma propriedade 'key' única baseada no ID da opção
        <Container key={option.id}>
          {/* Elemento de input do tipo rádio */}
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            // Verificando se a opção atual é a selecionada
            checked={selectedValue === option.value}
            // Acionando a função 'onChange' quando o botão de rádio é alterado
            onChange={onChange}
          />

          {/* Rótulo associado ao input de rádio, usando o atributo 'for' para vinculá-lo ao input pelo ID */}
          <label htmlFor={option.id} className="radio-container">
            {/* Contêiner de botão de rádio estilizado customizado */}
            <div className="custom-radio">
              {/* Círculo/elemento interno representando o botão de rádio real */}
              <span></span>
            </div>

            {/* Texto do rótulo para o botão de rádio */}
            {option.label}
          </label>
        </Container>
      ))}
    </>
  );
}
