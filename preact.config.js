module.exports = (config, env, helpers) => {
  const babelLoader = helpers.getLoadersByName(config, 'babel-loader');
  const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader');

  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.plugins;

    // Used preact-cli to run dev model in order to get HMR working, so we need to include TailwindCSS
    plugins.unshift(require('tailwindcss'));
    plugins.unshift(require('autoprefixer'));
  });

  // Added nullish coalescing babel loader for ??
  babelLoader[0].rule.options.plugins.push(
    '@babel/plugin-proposal-nullish-coalescing-operator'
  );

  // Modules import resolving paths
  config.resolve.modules.push('src/');

  // Override contentBase due to asset folder structure is different between Preact/React
  config.devServer.contentBase = `${env.cwd}/public`;

  return config;
};
