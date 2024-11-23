import { createClient } from 'contentful';

   const client = createClient({
     space: 'x991iomo5nia', // Substitua pelo seu Space ID
     environment: 'master', // O padrão é 'master'
     accessToken: 'K1tDZLuw86ChL3X0-fqnMwIYNdCkMaIABxovC_GUAzw'
   });

   export default client;