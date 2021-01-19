module.exports = (config, env, helpers) => {
  const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader');

  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.plugins;

    // Used preact-cli to run dev model in order to get HMR working, so we need to include TailwindCSS
    plugins.unshift(require('tailwindcss'));
    plugins.unshift(require('autoprefixer'));
  });

  // Modules import resolving paths
  config.resolve.modules.push('src');

  return config;
};
