import { createClient } from 'contentful';

const client = createClient({
  space: 'x991iomo5nia', // Seu Space ID
  environment: 'master', // Por padrão, é 'master'
  accessToken: 'K1tDZLuw86ChL3X0-fqnMwIYNdCkMaIABxovC_GUAzw', // Seu Access Token
});

client
  .getEntry('6dQXAJhxKkBAossPnT1F10')
  .then((entry) => {
    console.log('Entrada obtida:', entry);
  })
  .catch((error) => {
    console.error('Erro ao obter a entrada:', error);
  });

export default client;