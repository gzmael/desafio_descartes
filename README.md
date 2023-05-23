![reactjs-vite-tailwindcss-boilerplate](https://user-images.githubusercontent.com/16243531/217138979-b854309c-4742-4275-a705-f9fec5158217.jpg)

# React Tailwindcss Boilerplate build with Vite

This project use [Joao Paulo Boilerplate](joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate) to start. This boilerplate is build with Vite, React 18, TypeScript, Vitest, Testing Library, TailwindCSS 3, Eslint and Prettier.

## What is inside?

This project uses many tools like:

- [Vite](https://vitejs.dev)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)

## Tecnologias Utilizadas

### CSS-in-JS
- **TailwindCSS**: framework utilitário CSS utilizado para acelerar a criação da interface. Com classes já predefinidas é possível criar interfaces de forma mais rápidas e responsivas por meio de tokens, cores, espaçamentos, já predefinidos.
- **Class Variance Authority**: ferramenta para criar variantes de componentes de forma mais fáceis e com a possibilidade de adicionar classes personalizadas. Uma ferramenta que pode aumentar a produtividade de CSS-IN-JS como Stitches ou Vanilla Extract.
- **Tailwind Merge e CLSX**: Conjunto de módulos para fazer o merge das classes do Tailwindcss e variantes dos componentes.

### Mapa

- **Leaflet + Leaflet-React**: Utilizado para exibição do mapa, marcações e popover.

### APIs
- **Axios**: Para as requisições de consumo de API externas.
- **Google Geocode**: Utilizado para fazer a busca de latitude e longitude a partir de um endereço.
- **Unsplash API**: Para exibir uma imagem de acordo com o contexto da localização buscada no mapa.
- **Open Weather API**: Para busca dos dados de previsão do tempo de acordo com a latitude e longitude.

### Testes
- **Testing Library**: Para fazer os testes dos componentes ao serem renderizados na tela.
- **Vitest**: Para reprodução dos testes e mocks de funções.

## Getting Started

### Install

Clone the project.

```bash
git clone https://github.com/gzmael/desafio_descartes.git
```

Access the project directory.

```bash
cd desafio_descartes
```

Install dependencies.

```bash
npm install
```

Create .env file.

```bash
cp .env.example .env
```

Update the enviroments from .env file.

```bash
VITE_GOOGLE_GEOCODING_KEY=
VITE_UNSPLAH_KEY=
```

Serve with hot reload at <http://localhost:5173>.

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Typecheck

```bash
npm run typecheck
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```

View and interact with your tests via UI.

```bash
npm run test:ui
```
View tests coverages.

```bash
npm run test:coverage
```

## License

This project is licensed under the MIT License.
