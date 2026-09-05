# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Testes

### Testes unitários (Jest + React Testing Library)

O Jest já vem configurado pelo Create React App. Os testes ficam em arquivos
`*.test.ts` / `*.test.tsx` próximos ao código (ex.: [src/store/reducers/cart.test.ts](src/store/reducers/cart.test.ts)).

```bash
# Modo watch (desenvolvimento)
npm test

# Execução única com relatório de cobertura (CI)
npm run test:ci
```

### Testes E2E (Cypress)

Os specs ficam em `cypress/e2e/` e a configuração em [cypress.config.ts](cypress.config.ts)
(baseUrl: `http://localhost:3000`).

```bash
# 1. Suba a aplicação em um terminal
npm start

# 2. Em outro terminal, abra a interface do Cypress...
npm run cypress:open

# ...ou rode em modo headless (CI)
npm run cypress:run

# Atalho: sobe o servidor, espera e roda o Cypress automaticamente
npm run e2e
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
