const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');

const path = require('path');

module.exports = function(config, env) {
  // You can use your own config here as well, instead our default config.
  var config = genDefaultConfig(config, env);
  config.module.loaders.push(
    {
      test: /.scss$/,
      loaders: ["style", "css?modules", "sass"],
      include: path.resolve(__dirname, '../frontend/')
    }
  );
  // config.module.loaders.push(
  //   {
  //     test: /\.(png|jpg)$/,
  //     loader: 'url?limit=8192'
  //   }
  // );

  config.resolve.root = path.resolve(__dirname, '../frontend/src')

  config.resolve.alias['react-router-original'] = require.resolve('react-router');
  // this `rr.js` will replace the Link with a our own mock component.
  config.resolve.alias['react-router'] = require.resolve('./rr.js');

  return config;
};
