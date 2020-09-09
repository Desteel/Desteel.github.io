module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "usage",
        forceAllTransforms: true
      }
    ],
    ["@babel/preset-typescript"],
    ["@babel/preset-react"]
  ];

  const plugins = [
    [
      "module-resolver",
      {
        root: ["./AddressBook/src"],
        extensions: [".tsx", ".ts", ".js", ".jsx"]
      }
    ],
    ["@babel/plugin-transform-runtime"],
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ],
    ["babel-plugin-styled-components"]
  ];

  return {
    presets,
    plugins
  };
};
