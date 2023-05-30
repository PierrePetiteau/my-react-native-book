module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "nativewind/babel"],
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
  };
};
