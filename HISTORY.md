# Histórico

Abaixo descrevo as etapas que escolhi seguir em cada momento do desafio para seleção da Descartes da vaga de Frontend e os detalhes de implementação.

## Etapas

1. Para acelerar o desenvovimento fiz a escolha de um boilerplate de React + Vite + Typescript + TailwindCSS + Vitest. Seguindo a recomendação listada pelo Vite eu escolhi um template do [Joao Paulo Boilerplate](joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate). Lembrando que hoje o Vite é uma melhor opção do que criar usar create-react-app. Pois ele usa o esbuild, tornando o projeto até 100x mais rápidos que outros bundlers. [Why Vite | Vite (vitejs.dev)](https://vitejs.dev/guide/why.html)
2. Escolhi [Weather API - OpenWeatherMap](https://openweathermap.org/api) como API de previsão do tempo. Como foi a primeira vez que consumi esse tipo de conteúdo, tive que testar para saber quais retornos eu poderia trabalhar na interface do desafio, assim poderia criar a interface baseada nos dados que ela me retornaria a cada nova consulta de endereço.
3. Fiz o planejamento do [Layout responsivo](https://www.figma.com/file/rn1I11GEmr0R8dWJfB7NUq/Descartes?type=design&node-id=0%3A1&t=wxjyVvHyP11rTnXz-1) usando o Figma. As cores e fontes foram escolhidas baseadas no logo e no site da Descartes.
4. Iniciei a aplicação dos tokens de fontes e cores para os componentes de Texto (Text) e Headers (Headline). Para criar os componentes e as variantes eu escolhi usar o TailwindCSS + Class Variant Authority + Tailwind Merge + CLSX.
5. Adotei o padrão [Atomic Design](https://awari.com.br/atomic-design/) para organizar as pastas dos componentes.
6. Para alguns componentes foi adotado a técnica de TDD iniciar os testes juntamente com a criação do componente.
7. Optei por utilizar o Context API do React para o compartilhamento da posição, métodos e endereço entre a sidebar e o mapa.
8. Para criação do mapa foi utilizado o Leaflet. Assim os eventos de clicks no mapa ficaram mais simples de serem tratados.
9. Para a recuperação do endereço de acordo com a geolocalização eu utilizei a api do Google Geocode.
10. Finalizei o projeto com todas as funcionalidades solicitadas, porém, não consegui ter o coverage 100% nos testes. Alguns testes para eventos no mapa e a integração com a api não consegui criar devido a falta de experiência com esses tipos componentes.
11. O projeto foi colocado em produção na Vercel e pode ser visualizado no endereço [desafio-descartes.vercel.app](https://desafio-descartes.vercel.app/).
