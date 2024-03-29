/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import path from 'path';
import tasksPlugin from 'lila-tasks';
import webpackPlugin from 'lila-webpack';
import { forVue as vueWebpackConfigPlugin } from 'lila-webpack-config';
// import MomentLocalesPlugin from 'moment-locales-webpack-plugin';

export default lila => {
  tasksPlugin(lila);
  webpackPlugin(lila);
  vueWebpackConfigPlugin(lila);

  return ({ argv }) => {
    const config = {
      tasks: ['@lila/webpack'],
      alias: {
        '@': path.join(__dirname, 'src'),
        vue$: 'vue/dist/vue.esm.js',
      },
      extensions: ['jpg', 'jpeg', 'png', 'gif', 'ico', 'eot', 'ttf', 'woff', 'woff2'],
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          include: [path.join(__dirname, 'src/icons')],
          options: {
            symbolId: 'icon-[name]',
          },
        },
        {
          test: /\.svg$/,
          loader: 'url-loader',
          exclude: [path.join(__dirname, 'src/icons')],
          options: {
            // 0 means infinite, put 1 here to disable base64.
            limit: 1,
          },
        },
      ],
      // plugins: [
      //   new MomentLocalesPlugin({
      //     localesToKeep: ['es-us', 'zh-cn'],
      //   }),
      // ],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // 只打包初始时依赖的第三方
          },
          elementUI: {
            name: 'elementUI', // 单独将 elementUI 拆包
            priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
            test: /[\\/]node_modules[\\/][^\\/]*element-ui[\\/]/,
          },
        },
      },
      mockRoot: 'mock',
    };

    if (argv.disk) {
      config.devMiddleware = {
        watchOptions: { ignored: /node_modules/ },
        writeToDisk: !0,
      };
    }

    return config;
  };
};
