# Projeto Pokedex com PokeAPI

![Poke API Logo](pokemon3d.png)

Este projeto é uma aplicação web que aproveita a Poke API para fornecer informações detalhadas sobre Pokémon. Ele foi desenvolvido usando tecnologias modernas e destina-se a ajudar os fãs de Pokémon a explorar e aprender mais sobre essas criaturas fascinantes.


## Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **React:** A aplicação foi construída utilizando o framework React para criar o frontend.

- **JavaScript:** A linguagem de programação principal do projeto é o JavaScript.

- **Axios:** A biblioteca Axios é utilizada para fazer requisições à Poke API e buscar informações sobre os Pokémon.

- **HTML/CSS:** HTML foi usado para a estrutura da página, e CSS foi usado para a estilização e layout.

- **Poke API:** Esta aplicação consome a [Poke API](https://pokeapi.co/), que é uma API pública que fornece dados sobre Pokémon.
  
## Funcionalidades

- Pesquisar Pokémon por nome.
- Visualizar informações sobre um Pokémon específico, incluindo imagem, tipos, peso e altura.
- Explorar os diferentes tipos de Pokémon e ver uma lista de Pokémon associados a cada tipo.

## Funcionamento
A aplicação é composta por três componentes principais que trabalham juntos para fornecer uma experiência de busca e exibição de informações sobre Pokémon:

# BuscaPokemon
O componente BuscaPokemon é responsável por permitir aos usuários buscar Pokémon pelo nome. Funciona da seguinte maneira:

O usuário digita o nome do Pokémon desejado na caixa de pesquisa.
Ao clicar no botão "Buscar", o componente BuscaPokemon faz uma requisição à PokeAPI para obter os dados do Pokémon com base no nome fornecido.
Os dados do Pokémon são recuperados com sucesso e passados para o componente App.

# Informacao
O componente Informacao é responsável por exibir informações detalhadas sobre o Pokémon selecionado. Ele exibe os seguintes detalhes:

Nome do Pokémon.
Imagem do  Pokémon.
Tipo do Pokémon.
Peso do Pokémon.
Altura do Pokémon.

# App
O componente principal App desempenha um papel crucial na aplicação. Ele realiza as seguintes tarefas:

Renderiza o logotipo do Pokémon na parte superior da página.
Exibe um título informativo para orientar os usuários na busca por Pokémon.
Renderiza os componentes BuscaPokemon e Informacao na página, permitindo que os usuários interajam com eles.
Gerencia o estado dos dados do Pokémon, garantindo que os dados obtidos na busca sejam passados corretamente para o componente Informacao para exibição.
Em resumo, a aplicação é projetada de forma eficiente para permitir que os usuários pesquisem Pokémon pelo nome e visualizem informações detalhadas sobre eles de maneira fácil e intuitiva. Cada componente desempenha um papel específico para fornecer essa funcionalidade.
