# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

https://nextlevelweek.com/episodios/react/aula-1/edicao/6

React js

App para criar check-list: https://www.notion.so/

App para desenhar fluxo do sistema: https://whimsical.com/together-AxkExMEdgHNWgUSQvyPjcJ

Exportação do componente, dois tipos de exportar componente : 

export function name( )
- A função que recebe o import do componente, deve ser chamada através do nome do componente.
   Import { nome do componente } from ‘./local e name’.

Export default function name()
- A função que recebe o import do componente, deve ser chamada pelo nome da função do componente.
Import  nomeDoComponente from ‘./local e name’


--- Criar conta no firebase
configurar para uma conta gratuita.
Add firebase como uma dependência de desenvolvimento: yarn add firebase

configurar o .env.loca

dentro de src > services > firebase.ts

Em src > assets > images > fica as imagens SVG

criar uma pasta em src > components: Todo component deve ser criado com a letra maiúscula.

instalar sass pré processador de css
exe: yarn add node-sass@^5.0.0

instalar o react router dom, para controlar as respostas
exe: yarn add react-router-dom

como o react router dom, não tem as tipagens do typescript é preciso instalar as tipagens.
exe: yarn add @types/react-router-dom

useEffect = É event list.
 - Para boas praticas sempres que estiver ouvido um event list, tem como obrigação se descadastrar do evento.

 criando um variavel unsubscribe
 e passando a como função no final do metodo de useEffect unsubscribe()
 Exemplo: Arquivo Home.tsx
