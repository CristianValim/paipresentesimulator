import { Container } from './styles';

// Declaração do componente funcional 'Select'
export function Select({ htmlFor, id, value, label, options, onChange }) {
  return (
    // Componente de contêiner que pode ser estilizado com o estilo passado como propriedade
    <Container>
      {/* Rótulo associado ao elemento de entrada para acessibilidade */}
      <label htmlFor={htmlFor}>
        {/* Texto do rótulo */}
        {label}
      </label>
      {/* Elemento de seleção (dropdown) */}
      <select id={id} value={value} onChange={onChange}>
        {/* Mapeia as opções fornecidas como propriedade para criar as opções do dropdown */}
        {options.map((option) => (
          // Cada opção tem um valor e um rótulo
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
}

// Uso do componente Select para a seleção de gênero
export const GenderSelect = ({ selectedGender, onGenderChange }) => (
  <Container>
  <Select
    htmlFor="menuInputs"
    id="menuInputs"
    label="Quais seus pronomes?"
    value={selectedGender}
    options={[
      { value: 'elu', label: 'Elu/Delu' },
      { value: 'ela', label: 'Ela/Dela' },
      { value: 'ele', label: 'Ele/Dele' },
    ]}
    onChange={onGenderChange}
  />
  </Container>
);