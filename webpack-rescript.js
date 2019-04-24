const pkg = require("./package.json");

module.exports = config => {
  const styleLoader = require.resolve("style-loader");
  let overriden = {
    ...config,
    output: {
      ...config.output,
      filename: "static/js/duda-widget.js",
      library: pkg.name,
      libraryTarget: "umd"
    },
    optimization: {
      splitChunks: {
        chunks: "async"
      }
    }
  };

  let module = config.module;
  let styleFiles = ["scss", "sass", "css"];
  //Removing MiniCssExtract and postcss and adding styleLoader instead because in
  //production those scripts create separated css and combine to one main.hash.css file
  // instead of injecting the style directly into js as in development mode.
  if (config.mode !== "production") {
    return overriden;
  }
  module.rules[2].oneOf.forEach(loader => {
    if (!loader.use) {
      return;
    }

    const loaderIsForCss =
      loader.test &&
      styleFiles.some(fileType => loader.test.toString().includes(fileType));
    if (!loaderIsForCss) {
      return;
    }

    loader.use = [{ loader: styleLoader }, ...loader.use].filter(subLoader => {
      if (!subLoader.loader) {
        return true;
      }
      return !(
        subLoader.loader.includes("mini-css") ||
        subLoader.loader.includes("postcss")
      );
    });
  });

  return overriden;
};
