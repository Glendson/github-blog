# GitHub Blog App

## Sobre o Projeto

Este projeto é uma aplicação web que utiliza a API do GitHub para buscar e exibir issues de um repositório como um blog. Desenvolvido como parte de um desafio, o app permite listar o perfil do usuário, listar e filtrar todas as issues do repositório, e exibir posts completos.

### Funcionalidades Principais:

- **Listagem do Perfil:** Apresenta informações do perfil do usuário, como imagem, número de seguidores e outras disponíveis pela API do GitHub.
- **Listagem e Filtragem de Issues:** Exibe todas as issues do repositório com um resumo do conteúdo e permite filtrar por texto de busca.
- **Visualização de Post Completo:** Cria uma página para exibir um post (issue) completo, incluindo seu conteúdo em formato Markdown convertido para HTML.

## Layout da Aplicação

O layout da aplicação foi projetado no Figma para orientar a implementação das funcionalidades. Siga as instruções abaixo para acessar o layout:

### Criando uma conta no Figma

1. Se ainda não tiver, crie uma conta no Figma [clicando aqui](https://www.figma.com/signup).
2. Na página de cadastro, faça login com sua conta do Google ou crie uma conta usando seu e-mail.

### Acessando o Layout do App

Após criar e fazer login em sua conta, clique no link a seguir para acessar o layout da aplicação no Figma:
[Figma - Layout da Aplicação](https://www.figma.com/community/file/1138814951106121051)

## Desenvolvimento do Projeto

Para desenvolver este projeto, recomendamos utilizar as seguintes ferramentas e bibliotecas:

- **React com Vite e TypeScript:** Utilize o Vite como bundler e TypeScript para uma experiência de desenvolvimento mais robusta.
- **Axios:** Para fazer requisições HTTP à API do GitHub.
- **React Hook Form:** Facilita a criação e gerenciamento de formulários na aplicação.

### Preparativos

Antes de começar o desenvolvimento, siga os seguintes passos preparatórios:

1. **Crie um Repositório Público no GitHub:** Este repositório será utilizado para criar as issues que representarão os posts do blog. Certifique-se de criar issues com títulos e conteúdos relevantes.
   
2. **Utilize as APIs do GitHub:**
   - **GitHub Users API:** Utilize esta API para buscar os dados do seu usuário do GitHub. Faça uma requisição para `api.github.com/users/${username}`.
   - **GitHub Search API:** Utilize esta API para filtrar as issues do repositório que você criou. A rota principal é `https://api.github.com/search/issues`. Consulte a documentação para mais detalhes sobre como fazer a busca.
   - **GitHub Issues API:** Para exibir o post completo, utilize esta API para retornar todos os dados de uma issue. Acesse a issue através de sua URL no formato `https://api.github.com/repos/${username}/${repo}/issues/${issueNumber}`.

⚠️ **Atenção:** A API do GitHub possui limites de requisições por minuto. Certifique-se de configurar uma chave privada para aumentar o limite de requisições.

### Dicas Adicionais

- Utilize rotas dinâmicas do React Router para exibir a página do post completo. O parâmetro pode ser o número da issue.
- Para exibir o conteúdo do post corretamente, converta o texto em formato Markdown para HTML. Você pode usar a biblioteca `react-markdown` para isso.
- Em caso de dúvidas, visite nosso fórum [aqui](https://app.rocketseat.com.br/h/forum/react-js).

Após completar o desafio, sinta-se à vontade para personalizar a aplicação adicionando novas funcionalidades, mudando o layout ou cores para deixá-la com a sua cara!

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
