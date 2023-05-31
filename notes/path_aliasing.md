# Path aliasing

<details>
<summary>tsconfig.js</summary>

```javascript

"compilerOptions": {
  "baseUrl": "./src",
  "paths": {
    "@navigation/*": ["navigation/*"],
    "@components/*": ["components/*"],
    "@screens/*": ["screens/*"],
    "@utils/*": ["utils/*"],
    "@assets/*": ["assets/*"]
  },
  "jsx": "react-native",
  "moduleResolution": "node",
  "esModuleInterop": true
},

```

</details>

<details>
<summary>babel.config.js</summary>

```javascript

plugins: [
  [
    "module-resolver",
    {
      alias: {
        // This needs to be mirrored in tsconfig.json
        "@src": "./src",
        "@navigation": "./src/navigation",
        "@components": "./src/components",
        "@screens": "./src/screens",
        "@utils": "./src/utils",
      },
    },
  ],
],

```

</details>
