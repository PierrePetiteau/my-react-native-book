# nativewind-app setup

## Setup

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
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

</details>

<details>
<summary>3. Setup babel.config.js</summary>

```javascript
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};

```

</details>

<details>
<summary>4. Setup app.d.ts</summary>

```typescript
// app.d.ts
/// <reference types="nativewind/types" />
```

</details>
