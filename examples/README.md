# nativewind-app setup

<details>
<summary>1. Install package</summary>

```shell
npm install nativewind
npm install --save-dev tailwindcss
```

</details>

<details>
<summary>2. Setup tailwind.config.js</summary>

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./App/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
};
```

</details>

<details>
<summary>3. Setup babel.config.js</summary>

```javascript
// babel.config.js
module.exports = {
  plugins: ["nativewind/babel"],
};
```

</details>
