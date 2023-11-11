// Importando o objeto 'Voices' do arquivo 'Audios'
import { Voices } from './Audios';

// Função que retorna o caminho do arquivo de áudio com base no gênero e na necessidade selecionados
export const getAudioPath = (selectedGender, selectedNeed) => {
  // Caminho base para os arquivos de áudio
  const baseAudioPath = './assets/voices/';

  // Obtém a lista de arquivos associados ao gênero e à necessidade selecionados
  const fileList = Voices[selectedGender][selectedNeed];

  // Escolhe aleatoriamente um arquivo da lista
  const randomFileIndex = Math.floor(Math.random() * fileList.length);
  const randomFile = fileList[randomFileIndex];

  // Adiciona logs de depuração para o arquivo escolhido
  console.log('Arquivo Aleatório:', randomFile);

  // Constrói o caminho completo do arquivo escolhido
  const audioPath = `${baseAudioPath}${selectedGender}/${selectedNeed}/${randomFile}`;
  console.log('Caminho do Áudio:', audioPath);

  // Retorna o caminho completo do arquivo de áudio
  return audioPath;
};
