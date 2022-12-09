# How to setup Nuxt3

Table of Content
- [How to setup Nuxt3](#how-to-setup-nuxt3)
- [New project](#new-project)
- [Install Pinia](#install-pinia)
  - [1. Install pinia with package manager](#1-install-pinia-with-package-manager)
  - [2. Config nuxt.config.js for Pinia](#2-config-nuxtconfigjs-for-pinia)
  - [3. Create and register as a plugin](#3-create-and-register-as-a-plugin)
- [Install Bootstrap](#install-bootstrap)
  - [1. Find the link to the latest version](#1-find-the-link-to-the-latest-version)
  - [2. In your nuxt.config.ts:](#2-in-your-nuxtconfigts)
- [ESLint + Prettier (/w Typescript supported)](#eslint--prettier-w-typescript-supported)
  - [1. Install core and plugin with package manager:](#1-install-core-and-plugin-with-package-manager)
  - [2. Config ESLint](#2-config-eslint)
  - [3. Config Prettier](#3-config-prettier)
  - [5. Setup linting command](#5-setup-linting-command)
  - [6. Install The ESLint Extension for VS Code](#6-install-the-eslint-extension-for-vs-code)
  - [7. Install The Prettier Extension for VS Code](#7-install-the-prettier-extension-for-vs-code)
  - [8. Enable format on save](#8-enable-format-on-save)
- [SASS-loader](#sass-loader)
- [Nuxt Icon](#nuxt-icon)


# New project

Open a terminal in your working folder and use the following command:

```bash
npx nuxi init <project-name>
cd <project-name>
npm install
```

To start a development server:

```bash
npm run dev
```

# Install Pinia

## 1. Install [pinia](https://pinia.vuejs.org/ssr/nuxt.html#installation) with package manager

```bash
npm install @pinia/nuxt
npm i pinia -f
```

## 2. Config nuxt.config.js for Pinia

add it to <code>modules</code> in your <code>nuxt.config.js</code> file

```js
// nuxt.config.js
export default defineNuxtConfig({
  // ... other options
  modules: [
    // ...
    '@pinia/nuxt',
  ],
})
```

## 3. Create and register as a plugin

Create a pinia instance (the root store) and pass it to the app as a plugin
   
```js 
// stores/index.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

And you are done!

# Install Bootstrap

Install bootstrap by CDN

## 1. Find the [link to the latest version](https://getbootstrap.com/docs/5.2/getting-started/download/#cdn-via-jsdelivr)
  
Copy first two links contains bootstrap.bundle

```HTML
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" ... 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" ...
```

## 2. In your [nuxt.config.ts](https://nuxt.com/docs/api/configuration/nuxt-config):

Inside app head, setup script and link for CDN link

```js
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
          integrity:
            'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4',
          crossorigin: 'anonymous',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
          integrity:
            'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
});
```

And you are done!


# ESLint + Prettier (/w Typescript supported)

## 1. Install core and plugin with package manager:

```bash   
npm i -D eslint@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint-plugin-nuxt@latest eslint-plugin-vue prettier eslint-plugin-prettier eslint-config-prettier
```
| package                                                   | description     |
| --------------------------------------------------------- | --------------- |
| eslint@latest <br>@typescript-eslint/eslint-plugin@latest | ESLint core     |
| typescript-eslint/parser@latest                           | TypeScript      |
| eslint-plugin-nuxt@latest                                 | Nuxt            |
| prettier                                                  | Prettier core   |
| eslint-plugin-prettier<br>eslint-config-prettier          | Prettier plugin |
| eslint-plugin-vue                                         | Lint vue file   |

## 2. Config ESLint

In root directory, create a file named .eslintrc

```json
//.eslintrc:
{
  "env": {
    "browser": true,
    "es2022": true,
    "node": true
  },
  "extends": [
    // Order is importante
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "parser": "@typescript-eslint/parser"
  },
  "plugins": ["@typescript-eslint", "vue", "prettier"],
  "rules": {
    "semi": 2,
    "vue/multi-word-component-names": "off",
    "quotes": [
      2,
      "single",
      { "avoidEscape": true, "allowTemplateLiterals": true }
    ],
    "prettier/prettier": [
      "warn",
      {
        "singleQuote": true
      }
    ],
    "@typescript-eslint/no-var-requires": "off",
    "no-unused-vars": "off"
  },
  "ignorePatterns": ["node_modules", "build", "dist", "public"]
}
```


## 3. Config Prettier

In root directory, create a file named .prettierrc

```json
//.prettierrc
{
  "singleQuote": true,
  "semi": true
}
```
And create file .prettierignore

The content shoulb be same as .gitignore

## 5. Setup linting command

In package.json

```json
//package.json
"scripts": {
  //...
    "lint": "eslint . --ext .js,.ts,.vue",
    "lint:fix": "eslint . --ext .js,.ts,.vue --fix",
    "format": "prettier --write \"**/*.{js,ts,vue,scss,html,md,json}\" --ignore-path .gitignore"
  },
```

## 6. Install The ESLint Extension for VS Code
Search and install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in MarketPlace

Setup lint target:

Ctrl+Shift+P > Preferences: Open Settings (JSON)
```json
 "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue"
    ]
```

## 7. Install The Prettier Extension for VS Code
Search and install the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in MarketPlace

Setup default formatter:

- Command + Shift + P > Search "Format" > “Format Document” >  “Prettier – Code Formatter”

- Settings > “Editor: Format on Save.” > check to true

## 8. Enable format on save
In .vscode/setting.json

```json
//.vscode/setting.json
{
  // Common
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,

  // ESLint
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": ["source.fixAll.eslint"],
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "vue"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // TypeScript
  "typescript.tsdk": "node_modules/typescript/lib"
}
```


# SASS-loader

```bash
npm install --save-dev sass sass-loader@10
```

# Nuxt Icon
https://nuxt.com/modules/icon#nuxt-icon
1. Install with package manager

```bash
npm install --save-dev nuxt-icon
```

2. nuxt.config.ts

```js
export default defineNuxtConfig({
  modules: ['nuxt-icon']
})
```

1. Usage
  
Find your icon at [https://icones.js.org/](https://icones.js.org/)

In HTML:

```HTML
<Icon name="uil:github" />
```








