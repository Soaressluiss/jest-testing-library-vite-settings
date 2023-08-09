### Installing Jest, Testing Library using Vite (React with Typescript)


```jsx
npm install jest @types/jest ts-node -D
```

```jsx
npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event -D
```

```jsx
npm install @babel/core @babel/preset-env @babel/preset-typescript @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom -D
```

### Criar o arquivo jest.config.ts

```jsx
// dentro do arquivo

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-test.ts'],
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.ts',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
  }
```

### Na raiz do projeto criar uma pasta .jest e na pasta o arquivo setup-jest.ts

```jsx
// dentro de setup-jest.ts

import '@testing-library/jest-dom'
```

### Dentro da pasta .jest criar a pasta mocks

```jsx
// dentro da pasta Mocks criar o arquivo fileMock.ts

module.exports = 'test-file-stub'
```

### Na raiz do projeto criar o arquivo babel.config.json com a seguinte configuração

```jsx
// dentro de babel.config.json

{
  "presets": [
    ["@babel/preset-env", { "targets": { "esmodules": true } }],
    ["@babel/preset-react", { "runtime": "automatic" }],
    ["@babel/preset-typescript"]
  ]
}
```

### No arquivo package.json

```jsx
"type": "module", // deletar essa linha ou substituir por:

"type": "commonjs",

```
