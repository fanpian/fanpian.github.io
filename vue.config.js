module.exports = {
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap(opts => {
        opts.transpileOnly = false;
        opts.happyPackMode = false;
        return opts;
      });
    // 打包时去掉console,debug
    config.optimization.minimizer('terser').tap(args => {
      args[0].terserOptions.compress.warnings = true;
      args[0].terserOptions.compress.drop_console = true;
      args[0].terserOptions.compress.drop_debugger = true;
      args[0].terserOptions.compress.pure_funcs = [
        'console.log',
        'console.table'
      ];
      return args;
    });
  },
  // 好像是多线程吧。用于在打包时关掉，则可以生成d.ts申明文件,否则报错
  parallel: false
};
